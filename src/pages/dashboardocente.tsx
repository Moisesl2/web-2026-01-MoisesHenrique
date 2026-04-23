
import {
  Bell,
  CalendarDays,
  ChevronDown,
  Clock3,
  DoorOpen,
  EllipsisVertical,
  LayoutDashboard,
  LogOut,
  Search,
  Settings,
  University,
} from "lucide-react";

const reservas = [
  {
    data: { mes: "OUT", dia: "24", ativo: true },
    titulo: "Laboratório de IA (L-02)",
    horario: "14:00 - 16:00",
    local: "Prédio Central",
    status: "CONFIRMADA",
    statusColor: "bg-[#86E06E] text-[#2E6E23]",
  },
  {
    data: { mes: "OUT", dia: "25", ativo: true },
    titulo: "Auditório das Engenharias",
    horario: "08:30 - 11:30",
    local: "Bloco E",
    status: "CONFIRMADA",
    statusColor: "bg-[#86E06E] text-[#2E6E23]",
  },
  {
    data: { mes: "OUT", dia: "27", ativo: false },
    titulo: "Sala de Reuniões 04",
    horario: "10:00 - 11:00",
    local: "Reitoria",
    status: "PENDENTE",
    statusColor: "bg-[#83A716] text-[#1B2A00]",
  },
];

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Reservar Sala", icon: DoorOpen, active: false, outlined: true },
  { label: "Histórico", icon: Clock3, active: false, outlined: true },
];

const disponibilidade = [
  { label: "Manhã", color: "bg-[#95E17F]" },
  { label: "Tarde", color: "bg-[#395500]" },
  { label: "Noite", color: "bg-[#A8E893]" },
  { label: "Lab", color: "bg-[#D5EBF8]" },
];

function StatCard({ value, label, subtle = false }: { value: string; label: string; subtle?: boolean }) {
  return (
    <div
      className={`rounded-[12px] px-4 py-3 ${
        subtle ? "bg-[#E5F3FB]" : "bg-[#0E4A8A] text-white"
      }`}
    >
      <div className={`text-[32px] font-extrabold leading-none ${subtle ? "text-[#2B8F33]" : "text-white"}`}>
        {value}
      </div>
      <div className={`mt-1 text-[10px] font-bold uppercase tracking-[0.08em] ${subtle ? "text-[#46627B]" : "text-[#B6D6F2]"}`}>
        {label}
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="flex h-full w-[136px] shrink-0 flex-col border-r border-[#E4EAF0] bg-white">
      <div className="flex items-start gap-3 px-3 pb-6 pt-5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] bg-[#0B4C8C] text-white">
          <University size={17} />
        </div>
        <div className="pt-[2px] leading-[1.05]">
          <div className="text-[11px] font-black tracking-[0.03em] text-[#0B4C8C]">SIFU</div>
          <div className="mt-[2px] text-[9px] font-semibold uppercase tracking-[0.08em] text-[#6C7D8E]">
            Portal Docente
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-[8px] pb-4">
        <nav className="space-y-2 pt-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`flex min-h-[42px] w-full items-center gap-2 rounded-[10px] px-3 text-left text-[12px] font-medium leading-[1.2] transition ${
                  item.active
                    ? "bg-[#F3FAFF] text-[#2E8C3D]"
                    : item.outlined
                      ? "border border-dashed border-[#9BC3EA] text-[#4A6178] hover:bg-[#F8FBFE]"
                      : "text-[#4A6178] hover:bg-[#F8FBFE]"
                }`}
              >
                <Icon size={15} className={item.active ? "shrink-0 text-[#2E8C3D]" : "shrink-0 text-[#687B8E]"} />
                <span className="whitespace-normal">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-auto space-y-2 pt-6">
          <button className="flex h-[35px] w-full items-center justify-center gap-2 rounded-[10px] border-2 border-[#C7DDF3] bg-[#0B4C8C] px-2 text-[12px] font-semibold text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)]">
            <span className="text-lg leading-none">+</span>
            Nova Reserva
          </button>

          <button className="flex h-9 w-full items-center gap-2 rounded-[8px] px-3 text-[12px] text-[#5B6F84] hover:bg-[#F8FBFE]">
            <Settings size={14} className="shrink-0" />
            Configurações
          </button>
          <button className="flex h-9 w-full items-center gap-2 rounded-[8px] px-3 text-[12px] text-[#5B6F84] hover:bg-[#F8FBFE]">
            <LogOut size={14} className="shrink-0" />
            Sair
          </button>
        </div>
      </div>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="flex h-[56px] shrink-0 items-center justify-between border-b border-[#E6ECF2] bg-[#F9FBFD] px-6">
      <div className="ml-auto flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9AAABB]" size={14} />
          <input
            placeholder="Buscar salas ou horários..."
            className="h-[34px] w-[224px] rounded-full border border-[#E3EAF1] bg-white pl-9 pr-4 text-[11px] text-[#5B7085] outline-none placeholder:text-[#A1AFBC]"
          />
        </div>

        <button className="text-[#7D8FA0]">
          <Bell size={16} />
        </button>

        <button className="flex items-center gap-2">
          <div className="h-8 w-8 overflow-hidden rounded-full border border-[#D9E3EC] bg-gradient-to-br from-[#D7B99A] to-[#6B4D3B]" />
          <ChevronDown size={14} className="text-[#7E8FA0]" />
        </button>
      </div>
    </header>
  );
}

function ReservaCard({
  data,
  titulo,
  horario,
  local,
  status,
  statusColor,
}: (typeof reservas)[number]) {
  return (
    <div className="flex items-center gap-4 rounded-[12px] bg-[#EEF6FB] px-4 py-4">
      <div
        className={`flex h-[50px] w-[34px] shrink-0 flex-col items-center justify-center rounded-[10px] ${
          data.ativo ? "bg-[#97E17F]" : "bg-[#D9E6EF]"
        }`}
      >
        <span className={`text-[8px] font-extrabold ${data.ativo ? "text-[#3D7B2B]" : "text-[#8BA0B3]"}`}>
          {data.mes}
        </span>
        <span className={`text-[16px] font-extrabold leading-none ${data.ativo ? "text-[#24681F]" : "text-[#8096AB]"}`}>
          {data.dia}
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <div className={`truncate text-[14px] font-extrabold ${data.ativo ? "text-[#082C53]" : "text-[#A2B3C2]"}`}>
          {titulo}
        </div>
        <div className={`mt-1 flex items-center gap-2 text-[10px] ${data.ativo ? "text-[#62788E]" : "text-[#9FB0BF]"}`}>
          <Clock3 size={11} />
          <span>{horario}</span>
          <span>•</span>
          <span>{local}</span>
        </div>
      </div>

      <div className={`rounded-full px-3 py-1 text-[9px] font-black tracking-[0.04em] ${statusColor}`}>
        {status}
      </div>

      <button className="text-[#6E8297]">
        <EllipsisVertical size={16} />
      </button>
    </div>
  );
}

function ReservasPanel() {
  return (
    <section className="min-w-0 flex-1 rounded-[16px] border-2 border-[#4E9D4D] bg-white px-4 py-4 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
      <div className="mb-4 flex items-center justify-between px-1">
        <h2 className="text-[24px] font-extrabold tracking-[-0.02em] text-[#071B30]">Próximas Reservas</h2>
        <button className="text-[11px] font-semibold text-[#2C8E38] hover:underline">Ver todas</button>
      </div>

      <div className="space-y-3">
        {reservas.map((reserva) => (
          <ReservaCard key={`${reserva.titulo}-${reserva.data.dia}`} {...reserva} />
        ))}
      </div>
    </section>
  );
}

function RightColumn() {
  return (
    <div className="w-[282px] shrink-0 space-y-4 xl:w-[292px]">
      <div className="grid grid-cols-2 gap-3">
        <StatCard value="08" label="Reservas nesta semana" subtle />
        <StatCard value="42h" label="Horas alocadas" subtle />
      </div>

      <div className="rounded-[16px] bg-[#08498B] p-4 text-white">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex h-8 w-8 items-center justify-center rounded-[8px] border border-white/25 bg-white/10">
            <CalendarDays size={15} />
          </div>
          <button className="rounded-full bg-white/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.06em] text-white/95">
            Esta semana
          </button>
        </div>

        <div className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#A8CDED]">Total de reservas</div>
        <div className="mt-1 text-[50px] font-extrabold leading-none">12</div>
      </div>

      <div className="rounded-[16px] bg-[#F6F3EA] p-4">
        <div className="mb-3 text-[16px] font-extrabold text-[#082C53]">Disponibilidade Hoje</div>
        <div className="grid grid-cols-4 gap-2">
          {disponibilidade.map((item) => (
            <div key={item.label} className="space-y-1 text-center">
              <div className={`h-[58px] rounded-[2px] ${item.color}`} />
              <div className="text-[9px] font-bold text-[#4E5E50]">{item.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[9px] leading-[1.45] text-[#99A39C]">
          A maioria dos auditórios está reservada para o período centralizado hoje à tarde
        </p>
      </div>

      <div className="rounded-[16px] bg-[#DDEFFA] p-4">
        <div className="mb-3 flex items-center gap-2 text-[14px] font-extrabold text-[#08345F]">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#5D9F3A] shadow-sm">
            <Search size={12} />
          </div>
          Explorar Espaços
        </div>
        <p className="mb-4 text-[10px] leading-[1.45] text-[#6A8193]">
          Busque salas disponíveis por capacidade ou recursos específicos.
        </p>
        <button className="h-[36px] w-full rounded-[10px] bg-white text-[12px] font-bold text-[#285B89] shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
          Pesquisar Agora
        </button>
      </div>
    </div>
  );
}

export default function PortalDocenteDashboard() {
  return (
    <div className="min-h-screen w-full bg-[#EDF2F7] text-slate-900">
      <div className="mx-auto min-h-screen w-full max-w-[1365px] bg-[#F9FBFD] shadow-[0_10px_35px_rgba(15,23,42,0.08)]">
        <div className="flex min-h-screen w-full">
          <Sidebar />

          <div className="flex min-w-0 flex-1 flex-col">
            <Topbar />

            <main className="flex-1 px-7 pb-7 pt-6">
              <div className="mb-6 flex items-start justify-between gap-6">
                <div>
                  <h1 className="text-[40px] font-extrabold leading-none tracking-[-0.03em] !text-[#0B4C8C]">
                    Bem-vindo, Prof. Ricardo
                  </h1>
                  <p className="mt-2 text-[13px] text-[#698096]">
                    Você tem 3 reservas confirmadas para esta semana.
                  </p>
                </div>
              </div>

              <div className="flex w-full items-start gap-5">
                <ReservasPanel />
                <RightColumn />
              </div>

              <div className="mt-5 grid grid-cols-[1fr_230px] gap-4">
                <div className="relative h-[200px] overflow-hidden rounded-[16px] bg-gradient-to-br from-[#6EBCCE] via-[#2B8FA9] to-[#0C4B88] p-4 text-white">
                  <div className="absolute -left-8 -top-6 h-16 w-16 rounded-full bg-white/20" />
                  <div className="absolute -right-7 -top-3 h-16 w-16 rounded-full bg-white/20" />
                  <div className="absolute -left-5 top-7 h-10 w-10 rounded-full bg-white/15" />
                  <div className="absolute bottom-0 right-0 h-14 w-20 rounded-tl-[38px] bg-[#0A467F]/70" />

                  <div className="relative flex h-full flex-col justify-between">
                    <span className="inline-flex w-fit rounded-[4px] bg-[#39B44A] px-2 py-[3px] text-[8px] font-black uppercase tracking-[0.06em] text-white">
                      Institucional
                    </span>

                    <div>
                      <div className="mb-1 text-[10px] font-medium tracking-[0.34em] text-white/30">UFERSA</div>
                      <h3 className="max-w-[230px] text-[20px] font-extrabold leading-[1.05] text-white">
                        Novas Regras de Reserva de Auditórios 2024
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="h-[200px] rounded-[16px] bg-[#FBF6EF] p-4">
                  <h3 className="text-[26px] font-extrabold tracking-[-0.02em] text-[#071B30]">Ajuda &amp; Suporte</h3>
                  <p className="mt-2 text-[12px] leading-[1.45] text-[#7E6E64]">
                    Dificuldades com o sistema ou precisa de uma autorização especial para salas de pós-graduação?
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
