# Design System — Formação em Marketing Digital
## Boca Rosa Company

> Documento de referência completo para replicação, extensão ou handoff do sistema visual desta landing page.

---

## 1. Conceito e Identidade Visual

### Conceito Central
A página comunica **autoridade feminina + aspiração de resultado**. O sistema visual é construído em torno de um universo de beleza sofisticada (Boca Rosa / Bianca Andrade), traduzido em uma linguagem de negócios — não é uma página de cosméticos, é uma página de formação profissional com identidade de marca forte e feminina.

### Personalidade da Marca
| Atributo | Expressão Visual |
|---|---|
| Femininidade | Rosa como cor dominante em todas as variações |
| Autoridade | Vinho/bordô como âncora de seriedade |
| Modernidade | Geometria limpa, ausência de ornamentos desnecessários |
| Acessibilidade | Tipografia legível, hierarquia clara |
| Confiança | Garantia visual (selo), depoimentos, preço transparente |

---

## 2. Paleta de Cores

### Cores Primárias

| Nome | Hex | Uso |
|---|---|---|
| **Rosa Principal** | `#E8A0B8` | Backgrounds de seção, destaques suaves |
| **Rosa Vibrante** | `#E5357A` | CTAs, links, destaques de texto, ícones ativos |
| **Rosa Pastel** | `#F7D6E3` | Fundos alternados, áreas de respiro |
| **Vinho / Bordô** | `#6B1A35` | Seções de alto contraste, rodapé, faixa de preço |

### Cores Secundárias

| Nome | Hex | Uso |
|---|---|---|
| **Branco Puro** | `#FFFFFF` | Backgrounds limpos, texto sobre vinho |
| **Off-white / Creme** | `#FDF0F5` | Background global da página |
| **Cinza Texto** | `#3D3D3D` | Corpo de texto principal |
| **Cinza Claro** | `#888888` | Textos secundários, legendas |

### Hierarquia de Contraste
```
Vinho (#6B1A35) + Branco    → Seções de alto impacto (preço, CTA final)
Rosa Vibrante + Branco      → Botões, links ativos
Rosa Pastel + Vinho/Rosa    → Seções informativas
Branco + Cinza Texto        → Conteúdo principal (módulos, FAQ)
```

---

## 3. Tipografia

### Famílias Tipográficas

A página utiliza uma combinação de **sans-serif geométrica** (corpo e títulos funcionais) com **sans-serif mais expressiva** nos elementos de marca.

```
Display / Headlines:     Sans-serif Bold / ExtraBold
                         Peso: 700–900
                         Tracking: normal a levemente condensado

Corpo de Texto:          Sans-serif Regular / Medium
                         Peso: 400–500
                         Line-height: ~1.6

Destaques Inline:        Itálico ou Bold colorido (Rosa Vibrante)
                         Usado para palavras-chave dentro de parágrafos
```

### Escala Tipográfica

| Nível | Tamanho aprox. | Peso | Uso |
|---|---|---|---|
| **H1 Hero** | 36–42px | 800 | Headline principal acima da dobra |
| **H2 Seção** | 28–32px | 700 | Títulos de seções internas |
| **H3 Submódulo** | 20–24px | 600 | Subtítulos de cards, módulos |
| **Body** | 14–16px | 400 | Parágrafos, descrições |
| **Caption / Label** | 12–13px | 500 | Ícones de benefícios, legendas |
| **CTA Button** | 14–16px | 700 | Texto dos botões de ação |
| **Price** | 40–48px | 900 | Destaque do preço (12x de R$99,50) |

### Padrão de Ênfase Inline
Uma técnica recorrente: palavras-chave dentro de headings recebem cor diferente sem mudar o peso.

```
"Marketing que funciona é aquele que tem <span rosa>INTENCIONALIDADE</span>"
```

---

## 4. Sistema de Botões

### Botão Primário (CTA Principal)
```
Background:    #E5357A (Rosa Vibrante)
Texto:         #FFFFFF, Bold, uppercase ou capitalizado
Border-radius: 24–32px (pill shape)
Padding:       14px 32px
Sombra:        none ou sutil (0 4px 12px rgba(229,53,122,0.3))
Hover:         Escurecer ~10% o background
```

### Botão Secundário / Outline
```
Background:    transparent
Border:        2px solid #E5357A ou #FFFFFF
Texto:         cor do border
Border-radius: 24–32px
```

### Botão de Garantia / Especial
```
Background:    #FFFFFF
Texto:         #E5357A ou #6B1A35
Contexto:      Aparece em seção de fundo vinho
```

---

## 5. Componentes

### 5.1 Cards de Benefícios (Feature Cards)

```
Layout:       Grid 4 colunas no desktop
Background:   Transparente ou branco com borda sutil
Ícone:        SVG ou emoji estilizado, cor Rosa Vibrante
Título:       Bold, ~14px
Descrição:    Regular, ~13px, cinza
Espaçamento:  gap: 24px
```

### 5.2 Cards de Resultado / Outcome Cards

```
Layout:       Grid 3–5 colunas
Background:   #FFFFFF com border-radius: 12px
Sombra:       0 2px 16px rgba(0,0,0,0.08)
Ícone/número: Rosa Vibrante, top center
Texto:        Centralizado, corpo pequeno
```

### 5.3 Lista de Módulos (Accordion-style)

```
Separador:    Linha fina, 1px, rosa claro ou cinza
Título:       "Módulo 0X – " em negrito, seguido do nome
Fundo:        Alternância branco / off-white
Border-left:  3px solid #E5357A (linha de destaque lateral)
```

### 5.4 Círculo / Alvo (Elemento Gráfico Central)

```
Conceito:     Círculos concêntricos (target/dartboard) em tons de rosa
Paleta:       Rosa claro → rosa médio → rosa vibrante → centro vinho
Uso:          Âncora visual da seção de proposta de valor
Posição:      Lado direito do grid, 50% da largura da seção
```

### 5.5 Selo de Garantia

```
Formato:      Círculo / badge circular
Background:   #6B1A35 (vinho)
Texto:        "7 DIAS DE GARANTIA", branco, bold
Subtexto:     "Risco Zero", menor
Estilo:       Badge físico/impresso (estampa de confiança)
```

### 5.6 Seção de Preço

```
Background:   Card escuro (#6B1A35) com bordas rosa
Parcelamento: "12x de" menor, "R$99,50" enorme (48px+, bold)
À vista:      "ou à vista por R$997" menor, opacidade reduzida
CTA:          Botão rosa vibrante, full-width no mobile
```

### 5.7 FAQ Accordion

```
Background:   Branco / off-white
Separadores:  1px rosa claro
Ícone toggle: "+" / "×" em rosa vibrante, lado direito
Pergunta:     Bold, corpo médio
```

### 5.8 Floating Chat / WhatsApp CTA

```
Posição:      Fixed, bottom-right
Background:   Rosa Vibrante ou Verde WhatsApp
Texto:        "FALAR COM A EQUIPE"
Sombra:       Pronounced drop shadow
```

---

## 6. Estrutura e Layout

### Grid System

```
Desktop:
  max-width:      1200px
  colunas:        12
  gutter:         24–32px
  padding lateral: 48–80px

Mobile:
  colunas:        4
  padding lateral: 20px
  stack:          vertical (column)
```

### Estrutura de Seções (de cima para baixo)

```
┌──────────────────────────────────────────┐
│ [HERO]                                    │
│  Headline + subheadline + CTA primário    │
│  Imagem da Bianca (lado direito)          │
│  Background: Rosa Pastel                  │
├──────────────────────────────────────────┤
│ [BENEFÍCIOS RÁPIDOS]                      │
│  4 ícones + labels horizontais            │
│  Background: Branco                       │
├──────────────────────────────────────────┤
│ [PROPOSTA DE VALOR]                       │
│  Texto esquerda + Círculo-alvo direita    │
│  Background: Rosa Pastel                  │
│  CTA secundário                           │
├──────────────────────────────────────────┤
│ [OUTCOMES / RESULTADOS]                   │
│  "Ao final desta formação você terá..."   │
│  5 cards em grid                          │
│  Background: Branco                       │
├──────────────────────────────────────────┤
│ [PARA QUEM É]                             │
│  Grid de perfis / personas                │
│  Background: Rosa Suave                   │
├──────────────────────────────────────────┤
│ [MÓDULOS / CONTEÚDO]                      │
│  Lista accordion de módulos               │
│  Background: Off-white / Branco           │
│  Botão "VEJA MAIS"                        │
├──────────────────────────────────────────┤
│ [BIO / AUTORIDADE]                        │
│  Foto Bianca + texto biográfico           │
│  Background: Rosa Pastel                  │
├──────────────────────────────────────────┤
│ [PREÇO / CTA FINAL]                       │
│  Seção dupla: left (texto) + right (card) │
│  Background: Vinho / card contrastante    │
├──────────────────────────────────────────┤
│ [GARANTIA]                                │
│  Selo 7 dias + texto de segurança         │
│  Background: Off-white                    │
├──────────────────────────────────────────┤
│ [FAQ]                                     │
│  Accordion + widget de contato lateral    │
│  Background: Branco                       │
├──────────────────────────────────────────┤
│ [FOOTER]                                  │
│  Logo, links legais, créditos             │
│  Background: Vinho ou Cinza escuro        │
└──────────────────────────────────────────┘
```

### Ritmo Visual de Backgrounds
A página alterna de forma consistente entre:
```
off-white → branco → rosa pastel → branco → rosa → branco → vinho → off-white → branco
```
Isso cria respiração e separa seções sem usar dividers explícitos.

---

## 7. Elementos Gráficos e Iconografia

### Ícones
- Estilo: **outline ou filled simples**, monocromáticos
- Cor: Rosa Vibrante (`#E5357A`) ou Branco (sobre fundos escuros)
- Tamanho padrão: 24–32px

### Lábio / Beijo (Brand Mark)
- Elemento recorrente de identidade: ícone de lábios estilizado
- Aparece como divisor de seção, marcador de listagem, ou detalhe decorativo
- Cor: Rosa Vibrante

### Checkmarks em Listas
```
✓ (checkmark) em Rosa Vibrante
Texto em Cinza Escuro
Espaçamento entre itens: 12px
```

### Seta de Navegação (Chevron)
- Aparece como indicador de "rolar para baixo" entre seções
- Fundo circular branco, seta cinza

---

## 8. Imagens e Fotografia

### Estilo Fotográfico
- **Sujeito:** Bianca Andrade em diferentes contextos (estúdio, lifestyle)
- **Mood:** Profissional + aspiracional, não casual
- **Paleta de roupas:** Tons neutros (preto, creme) ou rosa/vinho para harmonia
- **Background nas fotos:** Rosa pastel ou removido (recorte)
- **Posicionamento:** Sempre à direita do texto no desktop; centralizado no mobile

### Diretrizes
```
Remoção de background:  ✓ preferível (integra com background da seção)
Enquadramento:          De meio corpo a full body
Expressão:              Confiante, direta ao olhar, levemente sorridente
Iluminação:             High-key, suave, sem sombras duras
```

---

## 9. Espaçamento e Spacing Tokens

```css
--space-xs:   4px
--space-sm:   8px
--space-md:   16px
--space-lg:   24px
--space-xl:   40px
--space-2xl:  64px
--space-3xl:  96px
--space-4xl:  128px

/* Padding interno de seções */
--section-padding-y:  80px (desktop) / 48px (mobile)
--section-padding-x:  80px (desktop) / 20px (mobile)

/* Border radius */
--radius-sm:    6px   (tags, badges pequenos)
--radius-md:    12px  (cards)
--radius-lg:    24px  (cards maiores, imagens)
--radius-pill:  999px (botões CTA)
```

---

## 10. Sombras e Elevação

```css
--shadow-card:    0 2px 16px rgba(0, 0, 0, 0.08);
--shadow-button:  0 4px 12px rgba(229, 53, 122, 0.30);
--shadow-float:   0 8px 32px rgba(0, 0, 0, 0.16);
```

---

## 11. Motion e Interação

### Princípios
- Animações sutis, não distrativas
- Scroll-triggered reveals preferidos a animações automáticas
- Hover states em todos os elementos clicáveis

### Tokens de Transição
```css
--transition-fast:    150ms ease
--transition-normal:  250ms ease
--transition-slow:    400ms ease-in-out
```

### Comportamentos de Hover
```
Botão CTA:    background escurece 10%, leve translateY(-2px)
Card:         sombra aumenta, leve translateY(-4px)
Link texto:   sublinhado aparece, cor muda para Rosa Vibrante
Accordion:    smooth height transition
```

---

## 12. Padrões de Copywriting e Hierarquia de Conteúdo

### Fórmula de Headline
```
[Transformação desejada] + [Credencial / Quem ensina] + [Resultado específico]
```

### Padrão de Seção CTA
Toda seção termina ou contém um bloco:
```
[Título reforçando benefício]
[Frase de suporte / prova social]
[Botão: "QUERO GARANTIR MINHA VAGA"]
```

### Tom de Voz
```
✓ Direto e imperativo ("Aprenda", "Garanta", "Construa")
✓ Aspiracional mas realista
✓ Primeira pessoa do produto ("nossa metodologia")
✓ Urgência sem pressão excessiva
✗ Técnico / jargão excessivo
✗ Formal / distante
```

---

## 13. Acessibilidade e Responsividade

### Breakpoints
```css
--bp-mobile:   375px
--bp-tablet:   768px
--bp-desktop:  1024px
--bp-wide:     1280px
```

### Regras Mobile
- Stack único (1 coluna) para todos os grids
- Botões full-width
- Imagens centralizadas acima ou abaixo do texto
- Tamanho mínimo de toque: 44px
- Preço e CTA final pegajosos (sticky bottom bar opcional)

### Contraste
```
Rosa Vibrante (#E5357A) sobre Branco:   ✓ WCAG AA (4.5:1+)
Vinho (#6B1A35) sobre Branco:           ✓ WCAG AAA
Texto cinza (#3D3D3D) sobre off-white:  ✓ WCAG AA
Rosa claro sobre Branco:                ⚠ Verificar — pode ser borderline
```

---

## 14. Variáveis CSS — Token Reference

```css
:root {
  /* Cores */
  --color-primary:        #E5357A;
  --color-primary-light:  #F7D6E3;
  --color-primary-pale:   #FDF0F5;
  --color-accent:         #E8A0B8;
  --color-dark:           #6B1A35;
  --color-text:           #3D3D3D;
  --color-text-muted:     #888888;
  --color-white:          #FFFFFF;
  --color-bg:             #FDF0F5;

  /* Tipografia */
  --font-display:   'Montserrat', 'Poppins', sans-serif;
  --font-body:      'Inter', 'Poppins', sans-serif;
  --fw-regular:     400;
  --fw-medium:      500;
  --fw-semibold:    600;
  --fw-bold:        700;
  --fw-extrabold:   800;
  --fw-black:       900;

  /* Escala de tipo */
  --text-xs:    12px;
  --text-sm:    14px;
  --text-base:  16px;
  --text-lg:    20px;
  --text-xl:    24px;
  --text-2xl:   28px;
  --text-3xl:   36px;
  --text-4xl:   48px;

  /* Espaçamento */
  --space-xs:   4px;
  --space-sm:   8px;
  --space-md:   16px;
  --space-lg:   24px;
  --space-xl:   40px;
  --space-2xl:  64px;
  --space-3xl:  96px;

  /* Bordas */
  --radius-sm:    6px;
  --radius-md:    12px;
  --radius-lg:    24px;
  --radius-pill:  999px;

  /* Sombras */
  --shadow-card:    0 2px 16px rgba(0,0,0,0.08);
  --shadow-cta:     0 4px 12px rgba(229,53,122,0.30);
  --shadow-float:   0 8px 32px rgba(0,0,0,0.16);

  /* Transições */
  --transition-fast:    150ms ease;
  --transition-normal:  250ms ease;
  --transition-slow:    400ms ease-in-out;
}
```

---

## 15. Anti-patterns — O que NÃO fazer

```
✗ Usar azul ou verde como cor de destaque (quebra a identidade de marca)
✗ Tipografia serif — a página é inteiramente sans-serif
✗ Imagens com backgrounds conflitantes (sempre recortar ou integrar com a paleta)
✗ Botões quadrados (a marca usa pill/arredondado)
✗ Seções sem respiro — manter padding generoso
✗ Mais de 2 CTAs diferentes na mesma seção
✗ Ícones coloridos fora da paleta rosa/vinho
✗ Sombras excessivas ou muito pesadas
```

---

*Design System extraído da landing page "Formação em Marketing Digital — Boca Rosa Company". Versão 1.0.*