!function(){"use strict";var t,e,i,a,o,n={33763:function(t,e,i){i.d(e,{S:function(){return _}});var a=i(33940),o=i(89346),n=i(87697),r=i(65620),s=i(33832),l=i(37802),d=i(13400);class c extends o.H{constructor(){super(...arguments),this.useFastAnchoredRegion=!0,this.fixedPosition=!1,this.defaultVerticalPosition="bottom",this.defaultHorizontalPosition="end",this.autoFocus=!0,this.isUpdatingPosition=!1,this.isBingHp="bingHomepage"===d.jG.AppType,this.keyDownHandler=t=>(t.keyCode===s.Lp?(this.referrerButton&&this.referrerButton.focus(),this.$emit("dismiss-menu")):t.keyCode===s.RN&&(this.customTabEventHandler?this.customTabEventHandler(this,t):this.tabEventHandler(t)),!0),this.updatePositionManually=()=>{this.updatePosition()},this.tabEventHandler=t=>{const e=this.fluentMenu.children.length,i=t.target;Array.from(this.fluentMenu.children).map(((a,o)=>{if(a===i){const i=(o+(t.shiftKey?-1:1)+e)%e;this.fluentMenu.children[i].focus()}}))},this.initMenuPositioning=()=>{this.setMenuPosition(),document.addEventListener("scroll",this.updatePosition),window.addEventListener("resize",this.updatePosition)},this.setMenuPosition=()=>{var t;const e=this.referrerButton.getBoundingClientRect(),i=(null===(t=this.menu.offsetParent)||void 0===t?void 0:t.offsetTop)||0;let a,o=0;this.isBingHp&&(o=this.menu.offsetParent.getBoundingClientRect().top+window.scrollY),a="top"===this.defaultVerticalPosition?`top:${e.top+window.scrollY-2-this.fluentMenu.clientHeight-i}px;`:e.bottom+this.fluentMenu.clientHeight>window.innerHeight?`top:${e.top+window.scrollY-2-this.fluentMenu.clientHeight-i-o}px;`:`top:${e.bottom+window.scrollY+1-i-o}px;`,this.menu.setAttribute("style",`position:absolute;${a}${this.getHorizontalPosition(e)}`),this.isUpdatingPosition=!1},this.updatePosition=(0,l.Z)((()=>{this.isUpdatingPosition||(window.requestAnimationFrame((()=>{this.setMenuPosition()})),this.isUpdatingPosition=!0)}),300)}connectedCallback(){super.connectedCallback(),this.fluentMenu&&(this.useFastAnchoredRegion||this.initMenuPositioning(),this.autoFocus&&this.fluentMenu&&this.fluentMenu.children.length&&(setTimeout((()=>{this.fluentMenu.children[0].focus()}),100),this.$emit("shown-menu")))}disconnectedCallback(){super.disconnectedCallback(),this.useFastAnchoredRegion||(document.removeEventListener("scroll",this.updatePosition),window.removeEventListener("resize",this.updatePosition))}useFastAnchoredRegionChanged(t,e){!1===e&&this.isConnected&&this.initMenuPositioning()}getHorizontalPosition(t){const e=document.documentElement.clientWidth;return"rtl"===document.dir||"start"===this.defaultHorizontalPosition?e-t.right+this.fluentMenu.clientWidth<=window.innerWidth?`right:${e-t.right}px`:`left:${t.left}px;`:t.left+this.fluentMenu.clientWidth<=window.innerWidth?`left:${t.left}px;`:`right:${e-t.right}px;`}}(0,a.gn)([n.LO],c.prototype,"menuItems",void 0),(0,a.gn)([n.LO],c.prototype,"referrerButton",void 0),(0,a.gn)([n.LO],c.prototype,"useFastAnchoredRegion",void 0),(0,a.gn)([(0,r.Lj)({mode:"boolean"})],c.prototype,"fixedPosition",void 0),(0,a.gn)([r.Lj],c.prototype,"defaultVerticalPosition",void 0),(0,a.gn)([r.Lj],c.prototype,"defaultHorizontalPosition",void 0),(0,a.gn)([(0,r.Lj)({mode:"boolean"})],c.prototype,"autoFocus",void 0),(0,a.gn)([(0,r.Lj)({mode:"boolean"})],c.prototype,"isWindowsDashboard",void 0);var p=i(56201),g=i(40082),h=i(26755),u=i(15933),m=i(53046),v=i(78125);const f=i(98648).L.create("menu-item-text-color").withDefault((t=>h.q2d.getValueFor(t)===v.h.DarkMode?"rgba(255, 255, 255, 0.786)":"rgba(0, 0, 0, 0.6063)")),b=m.i`
    :host {
        z-index: var(--menu-z-index, 700);
        --control-corner-radius: 4;
    }

    :host(:focus) {
        outline: none;
    }

    :host([isWindowsDashboard]) {
        --control-corner-radius: 8;
    }

    fluent-menu {
        box-shadow: 0 2.4px 7.2px rgba(0, 0, 0, 0.18), 0 12.8px 28.8px rgba(0, 0, 0, 0.22);
        max-width: var(--menu-max-width, 275px);
        min-width: var(--menu-min-width, 240px);
    }

    fluent-anchored-region {
        z-index: 10;
    }

    svg {
        fill: currentColor;
    }

    .icon {
        align-items: center;
        display: flex;
    }

    .rotate-icon-down svg {
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
    }

    :host(:${p.b}) {
        outline: none;
    }

    fluent-menu-item::part(content) {
        width: 100%;
        overflow: none;
    }

    .menu-item {
        grid-template-columns: minmax(32px, auto) 1fr minmax(32px, auto);
    }

    .menu-item-divider {
        margin-bottom: 6px;
        border-top-color: ${h.c1L}
    }
    .menu-item-text {
        padding-inline-start: 12px;
        color: ${f};
        font-size: 12px;
    }
    `.withBehaviors((0,g.vF)(m.i`
                .menu-item[isNavigation] {
                    color: ${u.H.LinkText};
                }

                .menu-item[isNavigation]:hover {
                    color: ${u.H.HighlightText};
                }
            `));var x=i(39181),y=i(13988),C=i(58952),w=i(18864);const $=x.d`
${(0,y.g)((t=>t.isDivider),x.d`
    <fluent-divider class="menu-item-divider"></fluent-divider>`)}
${(0,y.g)((t=>t.isText),x.d`
    <div class="menu-item-text" role="presentation">${t=>t.title}</div>`)}
${(0,y.g)((t=>!t.isDivider&&!t.isText),x.d`
    <fluent-menu-item
        aria-label="${t=>t.ariaLabel?t.ariaLabel:t.title}"
        class="menu-item"
        part="menu-item"
        @change=${(t,e)=>t.onClick(e.event)}
        tabindex="0"
        role="menuitem"
        exportparts="start: actions-menu-start menu-item"
        id="${t=>t.id}"
        ?disabled="${t=>t.disabled}"
        isNavigation="${t=>t.isNavigation}"
        data-t="${t=>t.telemetryTag}"
        data-customhandled=${t=>t.dataCustomHandled||void 0}
    >
        ${(0,y.g)((t=>t.glyph),x.d`<span slot="start" class="icon" aria-hidden="true">${t=>x.d`${t.glyph}`}</span>`)}
        ${t=>t.title}
        ${(0,y.g)((t=>t.suffixGlyph),x.d`<span slot="end" class="icon" aria-hidden="true">${t=>x.d`${t.suffixGlyph}`}</span>`)}
    </fluent-menu-item>`)}
`,k=x.d`
<fluent-menu ${(0,C.i)("fluentMenu")}
    @keydown=${(t,e)=>t.keyDownHandler(e.event)}
    class="menu"
    part="menu">
    ${(0,w.rx)((t=>t.menuItems),$)}
</fluent-menu>`,L=x.d`
<template id="actions-menu" ${(0,C.i)("menu")}>
    ${(0,y.g)((t=>t.useFastAnchoredRegion),x.d`
    <fluent-anchored-region
        part="menu-region"
        :anchorElement=${t=>t.referrerButton||document.body}
        fixed-placement="${t=>t.fixedPosition}"
        vertical-positioning-mode="dynamic"
        vertical-default-position="${t=>t.defaultVerticalPosition}"
        horizontal-positioning-mode="dynamic"
        horizontal-default-position="${t=>t.defaultHorizontalPosition}"
        horizontal-inset="true"
    >
       ${k}
    </fluent-anchored-region>`)}
    ${(0,y.g)((t=>!t.useFastAnchoredRegion),x.d`${k}`)}
</template>`;var T=i(63070),S=i(96824),F=i(64137),A=i(12249),I=i(83496),M=i(57905);let _=class extends c{};_=(0,a.gn)([(0,o.M)({name:"msn-actions-menu",template:L,styles:b,shadowOptions:{delegatesFocus:!0}})],_),(0,T.z)().withShadowRootMode("closed").withElementDisambiguation((()=>M.h.ignoreDuplicate)).register((0,S.ue)(),(0,F.q$)(),(0,A.H5)(),(0,I.tT)())},92446:function(t,e,i){i.d(e,{J:function(){return b}});var a=i(33940),o=i(89346),n=i(65620);class r extends o.H{constructor(){super(...arguments),this.preText="",this.postText=""}connectedCallback(){super.connectedCallback(),this.spinnerCompleteTimer=setTimeout((()=>{this.spinnerCompletedCallback&&this.spinnerCompletedCallback()}),3e3)}disconnectedCallback(){clearTimeout(this.spinnerCompleteTimer),this.spinnerCompleteTimer=void 0}}(0,a.gn)([(0,n.Lj)({attribute:"pre-text"})],r.prototype,"preText",void 0),(0,a.gn)([(0,n.Lj)({attribute:"post-text"})],r.prototype,"postText",void 0);var s=i(26755),l=i(53046),d=i(16859);const c=l.i`
    .spinner-background {
        stroke: rgba(0, 0, 0, 0.07);
    }

    .meter {
        stroke: ${s.goi};
    }

    .checkmark-background {
        fill: ${s.goi};
    }

    .checkmark {
        fill: white;
    }
`,p=l.i`
    .spinner-background {
        stroke: rgba(255, 255, 255, 0.54);
    }

    .meter {
        stroke: white;
    }

    .checkmark-background {
        fill: white;
    }

    .checkmark {
        fill: black;
    }
`,g=l.i`
    :host {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    :host([card-size="_1x_1y"]) .text {
        display: none;
    }

    :host([card-size="_1x_1y"]) svg {
        height: 30px;
        width: 30px;
    }

    :host(.check-icon[card-size="_1x_1y"]) {
        padding-top: 0;
        padding-bottom: 11px;
    }

    svg {
        height: 48px;
        margin: auto;
        width: 48px;
    }
      
    .spinner-background {
        fill: none;
        stroke-width: 2.5px;
    }

    .meter {
        animation: spinner 3s linear;
        fill: none;
        stroke-dasharray: 150;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        stroke-width: 2.5px;
        transform: rotate(-90deg);
        transform-origin: 50% 50%; 
    }

    @keyframes spinner {
        from {
            stroke-dashoffset: 150;
        }
        to {
            stroke-dashoffset: 0;
        }
    }

    .checkmark-background {
        animation: checkmark-background 4s linear;
        transform-origin: 50% 50%; 
    }

    @keyframes checkmark-background {
        0%, 75% {
            fill-opacity: 0;
        }
        78% {
            fill-opacity: 1;
        }
    }

    .checkmark {
        animation: checkmark 4s linear;
        animation-fill-mode: both;
        transform: translate(8px, 8px);
        transform-origin: 50% 50%;
    }

    @keyframes checkmark {
        0%, 75% {
            transform: scale(0) translate(8px, 8px);
        }
        85% {
            transform: scale(1.25) translate(8px, 8px);
        }
        100% {
            transform: scale(1) translate(8px, 8px);
        }
    }

    span {
        display: block;
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
        overflow: hidden;
        position: absolute;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 236px;
    }

    .text {
        height: 20px;
        padding-top: 8px;
        width: 236px;
    }

    .pre-text {
        animation: fadeout 1s;
        animation-delay: 3s;
        animation-fill-mode: both;
    }

    .post-text {
        animation: fadein 1s;
        animation-delay: 3s;
        animation-fill-mode: both;
    }

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }

    @keyframes fadeout {
        from { opacity: 1; }
        to   { opacity: 0; }
    }
`.withBehaviors(new d.Y(c,p));const h=i(39181).d`
    <svg viewBox="0 0 48 48">
        <circle class="spinner-background" cx="24" cy="24" r="21.5" />
        <circle class="meter" cx="24" cy="24" r="21.5" />
        <circle class="checkmark-background" cx="24" cy="24" r="24"/>
        <path class="checkmark" d="M11.3333 22.1144L6.27614 17.0572C5.75544 16.5365 4.91122 16.5365 4.39052 17.0572C3.86983 17.5779 3.86983 18.4221 4.39052 18.9428L10.3905 24.9428C10.9112 25.4635 11.7554 25.4635 12.2761 24.9428L26.9428 10.2761C27.4635 9.75545 27.4635 8.91122 26.9428 8.39052C26.4221 7.86983 25.5779 7.86983 25.0572 8.39052L11.3333 22.1144Z"/>
    </svg>
    <div class="text">
        <span class="pre-text" role="alert">${t=>t.preText}</span>
        <span class="post-text">${t=>t.postText}</span>
    </div>
`;var u=i(63070),m=i(12306),v=i(39391),f=i(57905);let b=class extends r{};b=(0,a.gn)([(0,o.M)({name:"msn-animated-done-spinner",template:h,styles:g})],b),(0,u.z)().withShadowRootMode("closed").withElementDisambiguation((()=>f.h.ignoreDuplicate)).register((0,m.k)(),(0,v.xg)())},47195:function(t,e,i){i.d(e,{w:function(){return b}});var a=i(33940),o=i(89346),n=i(65620),r=i(87697),s=i(67121),l=i(84446);class d extends l.F{constructor(){super(...arguments),this.effectId="",this.isEnabled=!1,this.intersectionRootMargin="0px 0px 0px 0px",this.animationType="",this.showMultiTimes=!1,this.isAnimationValid=!1,this.updateAnimStatus=(t,e)=>{this.isAnimationValid!==t&&(this.isAnimationValid=t,t&&e&&setTimeout((()=>{e()}),this.animationConfig.duration))}}connectedCallback(){if(super.connectedCallback(),this.animationType){this.effectGroup=s.am.getEffectGroup();const t={root:this.intersectionRoot,rootMargin:this.intersectionRootMargin};this.effectGroup.register(this.effectId,this.animContainer,this.updateAnimStatus,t,this.showMultiTimes,this.animationConfig.delayTimeMs)}}disconnectedCallback(){super.disconnectedCallback(),this.animationType&&this.effectGroup.unregister(this.effectId)}}(0,a.gn)([n.Lj],d.prototype,"effectId",void 0),(0,a.gn)([(0,n.Lj)({mode:"boolean"})],d.prototype,"isEnabled",void 0),(0,a.gn)([n.Lj],d.prototype,"intersectionRoot",void 0),(0,a.gn)([n.Lj],d.prototype,"intersectionRootMargin",void 0),(0,a.gn)([n.Lj],d.prototype,"animationType",void 0),(0,a.gn)([n.Lj],d.prototype,"animationConfig",void 0),(0,a.gn)([(0,n.Lj)({mode:"boolean"})],d.prototype,"showMultiTimes",void 0),(0,a.gn)([r.LO],d.prototype,"isAnimationValid",void 0);var c=i(39181),p=i(13988),g=i(58952);const h={"scale-up":"animation1","scale-down":"animation1","scale-up-down":"animation2","opacity-up":"opacity-up-animation","move-up":"move-up-animation","move-up2":"move-up-animation2"},u=c.d`
    <style>
    .anim-container {
        overflow: hidden;
        width: 100%;
        height: 100%;
    }
    .anim-container div {
        transform: scale(${t=>{var e;return(null===(e=t.animationConfig)||void 0===e?void 0:e.scaleFrom)||1}});
    }
    .anim-wrapper {
        animation: ${t=>h[t.animationType]} ${t=>{var e;return null===(e=t.animationConfig)||void 0===e?void 0:e.durationString}} forwards;
    }

    .anim-wrapper-initial {
        opacity: ${t=>{var e,i;return(null===(e=t.animationConfig)||void 0===e?void 0:e.initialOpacity)?null===(i=t.animationConfig)||void 0===i?void 0:i.initialOpacity:1}};
    }

    @keyframes animation1 {
        0% {
            transform: scale(${t=>{var e;return null===(e=t.animationConfig)||void 0===e?void 0:e.scaleFrom}});
        }
        100% {
            transform: scale(${t=>{var e;return null===(e=t.animationConfig)||void 0===e?void 0:e.scaleTo}});
        }
    }

    @keyframes animation2 {
        0% {
            transform: scale(${t=>{var e;return null===(e=t.animationConfig)||void 0===e?void 0:e.scaleFrom}});
        }
        50% {
            transform: scale(${t=>{var e;return null===(e=t.animationConfig)||void 0===e?void 0:e.scaleTo}});
        }
        100% {
            transform: scale(${t=>{var e;return null===(e=t.animationConfig)||void 0===e?void 0:e.scaleFrom}});
        }
    }
    @keyframes opacity-up-animation {
        0% {
            opacity: 0;
        }
        66% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes move-up-animation {
        0% {
            transform: translate(0px, 100%);
            opacity: 0;
        }
        33% {
            transform: translate(0px, 0px);
            opacity: 1;
        }
        66% {
            transform: translate(0px, 0px);
            opacity: 1;
        }
        100% {
            transform: translate(0px, -100%);
            opacity: 0;
        }
    }

    @keyframes move-up-animation2 {
        0% {
            transform: translate(0px, 100%);
            opacity: 0;
        }
        66% {
            transform: translate(0px, 100%);
            opacity: 0;
        }
        100% {
            transform: translate(0px, 0px);
            opacity: 1;
        }
    }
    </style>
    <div class="anim-container">
    ${(0,p.g)((t=>t.animationType&&t.animationConfig),c.d`
        <div
            class=${t=>t.isAnimationValid?"anim-wrapper":"anim-wrapper-initial"}
            ${(0,g.i)("animContainer")}
        >
            <span part="anim-content">
                <slot name="anim-content"></slot>
            </span>
        </div>`)}
    ${(0,p.g)((t=>!t.animationType),c.d`<slot name="anim-content"></slot>`)}
    </div>
`;var m=i(53046),v=i(78562);const f=m.i``.withBehaviors(new v.g("layoutStyle"));let b=class extends d{};b=(0,a.gn)([(0,o.M)({name:"msn-animation-decorator",template:u,styles:f})],b)},20048:function(t,e,i){i.d(e,{R:function(){return p}});var a=i(33940),o=i(89346),n=i(65620);class r extends o.H{toggleSelected(){this.internalToggle&&(this.selected=!this.selected),this.$emit("selected-state-changed")}}(0,a.gn)([(0,n.Lj)({attribute:"data-icon"})],r.prototype,"dataIcon",void 0),(0,a.gn)([(0,n.Lj)({attribute:"layout"})],r.prototype,"layout",void 0),(0,a.gn)([(0,n.Lj)({attribute:"fill-color-selected"})],r.prototype,"fillColorSelected",void 0),(0,a.gn)([(0,n.Lj)({attribute:"filled-icon-path"})],r.prototype,"filledIconPath",void 0),(0,a.gn)([(0,n.Lj)({attribute:"select-icon"})],r.prototype,"selectIcon",void 0),(0,a.gn)([(0,n.Lj)({attribute:"unselect-icon"})],r.prototype,"unselectIcon",void 0),(0,a.gn)([(0,n.Lj)({attribute:"select-title"})],r.prototype,"selectTitle",void 0),(0,a.gn)([(0,n.Lj)({attribute:"unselect-title"})],r.prototype,"unselectTitle",void 0),(0,a.gn)([(0,n.Lj)({attribute:"animation-text"})],r.prototype,"animationText",void 0),(0,a.gn)([(0,n.Lj)({mode:"boolean"})],r.prototype,"selected",void 0),(0,a.gn)([(0,n.Lj)({attribute:"select-telemetry-tag"})],r.prototype,"selectTelemetryTag",void 0),(0,a.gn)([(0,n.Lj)({attribute:"unselect-telemetry-tag"})],r.prototype,"unselectTelemetryTag",void 0),(0,a.gn)([(0,n.Lj)({mode:"boolean"})],r.prototype,"internalToggle",void 0);const s=i(53046).i`
    fluent-button {
        border-radius: 100px;
    }

    fluent-button.fill-color-selected svg {
        fill: var(--fill-color-selected);
    }

    fluent-button.filled-icon-hover {
        background: transparent;
        min-width: 20px;
        height: 20px;
    }

    fluent-button.filled-icon-hover::part(control) {
        width: 20px;
    }

    fluent-button.filled-icon-hover svg {
        width: 20px;
        height: 20px;
    }

    fluent-button.filled-icon-hover:hover > svg > path {
        transition: all 0.5s;
        d: path(var(--filled-path));
    }

    fluent-button.filled-icon-hover,
    fluent-button.no-backplate:not(:hover) {
        background: transparent;
    }

    fluent-button.expand::part(control) {
        padding: 0;
    }

    .button-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-inline-start: 8px;
        animation: padding-icon 0.3s linear 2s 1 forwards;
    }

    .button-content > span {
        font-size: var(--type-ramp-minus-1-font-size);
        padding-inline-start: 6px;
        padding-inline-end: 10px;
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .button-content > svg {
        max-height: 16px;
    }

    .disappear {
        animation: disappear 0.3s ease-out 2s forwards;
        max-width: 165px;
    }

    .expand {
        border-radius: 100px;
        max-width: 210px;
    }

    @keyframes disappear {
        to { width: 0; padding-inline: 0; overflow: hidden; opacity: 0; display: none; }
    }

    @keyframes padding-icon {
        to { padding-inline-start: 0; }
    }
`.withBehaviors();var l=i(39181),d=i(13988);const c=l.d`
<fluent-button 
    class=${t=>`${"fillediconhover"===t.layout?"filled-icon-hover":""}\n        ${"nobackplate"===t.layout?"no-backplate":""}\n        ${t.fillColorSelected&&t.selected?" fill-color-selected":""}`}
    data-icon=${t=>t.dataIcon}
    appearance="neutral"
    style="--filled-path: '${t=>t.filledIconPath}'; --fill-color-selected: ${t=>t.fillColorSelected};"
    aria-label=${t=>t.selectTitle}
    aria-pressed=${t=>t.selected}
    title=${t=>t.selected?t.unselectTitle:t.selectTitle}
    @click=${t=>t.toggleSelected&&t.toggleSelected()}
    data-t="${t=>t.selected?t.unselectTelemetryTag:t.selectTelemetryTag}"
    >
    ${(0,d.g)((t=>t.selected),l.d`
        ${(0,d.g)((t=>"animated"!==t.layout),l.d`
            ${t=>l.d`${t.selectIcon}`}
        `)}
        ${(0,d.g)((t=>"animated"===t.layout),l.d`
            <span class="button-content">
                ${t=>l.d`${t.selectIcon}`}
                <span class="disappear">${t=>t.animationText}</span>
            </span>
        `)}
    `)}
    ${(0,d.g)((t=>!t.selected),l.d`${t=>l.d`${t.unselectIcon}`}`)}
</fluent-button>
`;let p=class extends r{};p=(0,a.gn)([(0,o.M)({name:"msn-card-button",template:c,styles:s,shadowOptions:{delegatesFocus:!0}})],p)},67121:function(t,e,i){i.d(e,{am:function(){return s}});var a,o=i(54433);class n{constructor({id:t,checkNewEffectInstance:e}){this.register=(t,e,i,a)=>{const o=`${this.effectItems.length}`,n={id:o,effectContainer:t,updateEffectStatus:e,showMultiTimes:a,isIntersecting:!1,isEffectShown:!1,observer:this.initIntersectionObserver(o,t,i)};this.effectItems.push(n)},this.unregister=()=>{this.effectItems.forEach((t=>{t.observer&&t.effectContainer&&t.observer.unobserve(t.effectContainer)})),this.effectItems=[]},this.initIntersectionObserver=(t,e,i)=>{if("function"!=typeof IntersectionObserver||!e)return null;const a={root:i&&i.root?document.getElementById(i.root):null,rootMargin:i&&i.rootMargin||"0px 0px 0px 0px"},o=new IntersectionObserver((e=>{e.forEach((e=>{this.handleIntersectingChange(t,e.isIntersecting)}))}),a);return o.observe(e),o},this.handleIntersectingChange=(t,e)=>{const i=(0,o.Z)(this.effectItems,(e=>e.id===t));-1!==i&&(this.effectItems[i].isIntersecting=e,e&&this.isAllEffectItemsIntersecting()?this.checkNewEffectInstance(!0):!e&&this.isAllEffectItemsNonIntersecting()&&this.updateEffectSeriesStatus(!1))},this.isAllEffectItemsIntersecting=()=>{let t=!0;return this.effectItems.forEach((e=>{e.isIntersecting||(t=!1)})),t},this.isAllEffectItemsNonIntersecting=()=>{let t=!0;return this.effectItems.forEach((e=>{e.isIntersecting&&(t=!1)})),t},this.isEffectValid=()=>{let t=!0;return this.effectItems.forEach((e=>{e.isIntersecting&&!e.isEffectShown||(t=!1)})),t},this.updateEffectSeriesStatus=(t,e)=>{this.effectItems.forEach((i=>{(i.showMultiTimes||t)&&(i.isEffectShown=t),i.updateEffectStatus(t,e)}))},this.id=t,this.effectItems=[],this.checkNewEffectInstance=e}}class r{constructor({id:t}){this.register=(t,e,i,a,r,s)=>{const l=(0,o.Z)(this.effectSequence,(e=>e.id===t));if(this.delayTimeMs=void 0===s?this.delayTimeMs:s,-1!==l)this.effectSequence[l].register(e,i,a,r);else{const o=new n({id:t,checkNewEffectInstance:this.checkNewEffectInstance});o.register(e,i,a,r),this.effectSequence.push(o)}},this.unregister=t=>{const e=(0,o.Z)(this.effectSequence,(e=>e.id===t));-1!==e&&(this.effectSequence[e].unregister(),this.effectSequence.splice(e,1))},this.notifyEffectCompleted=()=>{this.isPageShowingeffect=!1},this.checkNewEffectInstance=(t=!1)=>{t&&!this.isInitialState||setTimeout((()=>{const t=this.findFirstValidEffect();this.isPageScrolling||this.isPageShowingeffect||!t||(this.isPageShowingeffect=!0,t.updateEffectSeriesStatus(!0,this.notifyEffectCompleted))}),this.delayTimeMs)},this.handlePageScroll=()=>{this.isInitialState=!1,this.isPageScrolling||(this.isPageScrolling=!0),this.pageScrollingTimer&&window.clearTimeout(this.pageScrollingTimer),this.pageScrollingTimer=window.setTimeout((()=>{this.isPageScrolling=!1,this.checkNewEffectInstance()}),500)},this.findFirstValidEffect=()=>{const t=(0,o.Z)(this.effectSequence,(t=>t.isEffectValid()));return-1!==t?this.effectSequence[t]:null},this.id=t,this.effectSequence=[],this.pageScrollingTimer=-1,this.isPageScrolling=!1,this.isPageShowingeffect=!1,this.delayTimeMs=1e3,document.addEventListener("scroll",this.handlePageScroll),this.isInitialState=!0}}!function(t){t.default="default"}(a||(a={}));const s=new class{constructor(){this.getEffectGroup=t=>{const e=t||a.default,i=(0,o.Z)(this.effectGroups,(t=>t.id===e));if(-1!==i)return this.effectGroups[i];{const t=new r({id:e});return this.effectGroups.push(t),t}},this.effectGroups=[]}}},38454:function(t,e,i){i.d(e,{d:function(){return w}});var a=i(33940),o=i(89346),n=i(65620);class r extends o.H{toggleSelected(){this.selected=!this.selected,this.$emit("selected-state-changed",{selected:this.selected})}handleKeyPress(t){t&&"Enter"===t.key&&this.toggleSelected()}}(0,a.gn)([(0,n.Lj)({attribute:"img-src"})],r.prototype,"imgSrc",void 0),(0,a.gn)([n.Lj],r.prototype,"heading",void 0),(0,a.gn)([(0,n.Lj)({attribute:"follow-aria-label"})],r.prototype,"followAriaLabel",void 0),(0,a.gn)([(0,n.Lj)({attribute:"unfollow-aria-label"})],r.prototype,"unfollowAriaLabel",void 0),(0,a.gn)([(0,n.Lj)({mode:"boolean"})],r.prototype,"selected",void 0),(0,a.gn)([(0,n.Lj)({attribute:"select-telemetry-tag"})],r.prototype,"selectTelemetryTag",void 0),(0,a.gn)([(0,n.Lj)({attribute:"unselect-telemetry-tag"})],r.prototype,"unselectTelemetryTag",void 0);var s=i(62734),l=i(26755),d=i(56201),c=i(67020),p=i(16859),g=i(53046);const h=g.i`
    :host {
        background: rgba(255, 255, 255, 0.65);
    }

    :host,
    :host * {
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }

    :host(:hover),
    :host(:${d.b}) {
        --elevation: 4;
        ${s.XC};
    }

    :host(:hover),
    :host(:${d.b}),
    :host([selected]) {
        background: white;
    }

    .heading {
        color: ${l.Q5n}
    }
`,u=g.i`
    :host {
        background: rgba(255, 255, 255, 0.2);
    }

    :host(:hover) {
        border-color: #F0F0EF;
    }

    :host(:hover),
    :host([selected]),
    :host(:${d.b}) {
        background: rgba(255, 255, 255, 0.5);
    }

    .heading {
        color: ${l.CHi}
    }
`,m=g.i`
    ${(0,c.j)("inline-flex")} :host {
        height: 32px;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-inline: 4px 12px;
        border-radius: calc(${l.rSr} * 5px);
        outline: none;
        cursor: pointer;
        align-items: center;
        border: 1px solid transparent;
        box-sizing: border-box;
    }

    :host([selected]),
    :host(:${d.b}),
    :host(:hover) {
        padding-inline-start: 6px;
    }

    :host(:${d.b}) {
        border-color: ${l.Avx}
    }

    .heading {
        max-width: 82px;
        font-weight: 600;
        font-size: var(--type-ramp-minus-1-font-size);
        line-height: var(--type-ramp-minus-1-line-height);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: inline-block;
    }

    .image {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin-inline-end: 8px;
    }

    :host(:hover) .image,
    :host(:${d.b}) .image {
        display: none;
    }

    .icon {
        width: 20px;
        height: 20px;
        margin-inline-end: 10px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: 1px solid transparent;
        box-sizing: border-box;
    }

    .check-icon {
        background: ${l.Avx};
        border-color: ${l.Avx};
        fill: white;
    }

    .add-icon {
        background: #FFFFFF;
        border-color: rgba(0, 0, 0, 0.25);
        fill: #212121;
        display: none;
    }

    :host(:hover) .add-icon,
    :host(:${d.b}) .add-icon {
        display: flex;
    }
`.withBehaviors(new p.Y(h,u));var v=i(39181),f=i(13988),b=i(99478),x=i(68402),y=i(8686);const C=v.d`
    <template
        tabindex="0"
        role="button"
        title="${t=>t.selected?(0,b.WU)(t.unfollowAriaLabel,t.heading):(0,b.WU)(t.followAriaLabel,t.heading)}"
        aria-label="${t=>t.selected?(0,b.WU)(t.unfollowAriaLabel,t.heading):(0,b.WU)(t.followAriaLabel,t.heading)}"
        aria-pressed="${t=>!!t.selected}"
        @click="${t=>t.toggleSelected&&t.toggleSelected()}"
        @keypress="${(t,e)=>t.handleKeyPress&&t.handleKeyPress(e.event)}"
        data-t="${t=>t.selected?t.unselectTelemetryTag:t.selectTelemetryTag}"
    >
        ${(0,f.g)((t=>t.selected),v.d`
            <span class="icon check-icon">${y.Z}</span>
        `)}
        ${(0,f.g)((t=>!t.selected),v.d`
            <img class="image" src="${t=>t.imgSrc}"/>
            <span class="icon add-icon">${x.Z}</span>
        `)}
        <span class="heading">${t=>t.heading}</span>
    </template>
`;let w=class extends r{};w=(0,a.gn)([(0,o.M)({name:"msn-follow-pill-button",template:C,styles:m})],w)},94836:function(t,e,i){i.d(e,{n:function(){return w}});var a=i(33940),o=i(89346),n=i(65620);class r extends o.H{toggleSelected(){this.selected=!this.selected,this.$emit("selected-state-changed",{selected:this.selected})}handleKeyPress(t){t&&"Enter"===t.key&&this.toggleSelected()}}(0,a.gn)([(0,n.Lj)({attribute:"img-src"})],r.prototype,"imgSrc",void 0),(0,a.gn)([n.Lj],r.prototype,"heading",void 0),(0,a.gn)([(0,n.Lj)({attribute:"follow-aria-label"})],r.prototype,"followAriaLabel",void 0),(0,a.gn)([(0,n.Lj)({attribute:"unfollow-aria-label"})],r.prototype,"unfollowAriaLabel",void 0),(0,a.gn)([(0,n.Lj)({mode:"boolean"})],r.prototype,"selected",void 0),(0,a.gn)([(0,n.Lj)({attribute:"select-telemetry-tag"})],r.prototype,"selectTelemetryTag",void 0),(0,a.gn)([(0,n.Lj)({attribute:"unselect-telemetry-tag"})],r.prototype,"unselectTelemetryTag",void 0);var s=i(26755),l=i(62734),d=i(67020),c=i(56201),p=i(40082),g=i(16859),h=i(15933),u=i(53046);const m=u.i`
    :host(:hover) {
        outline: 1px solid transparent;
        box-shadow: 0 0 0 1px ${s.QOc};
    }
`,v=u.i`
    ${(0,d.j)("flex")} :host {
        --elevation: 4;
        cursor: pointer;
        overflow: hidden;
        ${l.XC};
        width: var(--width, 84px);
        height: var(--height, 84px);
        border-radius: calc(var(--layer-corner-radius) * 1.5px);
        outline: none;
        align-items: center;
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;   
    }

    .check-icon {
        background: ${s.Avx};
        border: 1px solid ${s.Avx};
        fill: white;
    }

    .icon-container {
        width: 100%;
        position: absolute;
        top: 0px;
        display: flex;
        justify-content: flex-end;
    }

    .icon {
        margin: 6px;
        width: 20px;
        height: 20px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
    }

    :host(:hover) {
        --elevation: 16;
    }

    :host(:hover) .mask,
    :host(:${c.b}) .mask {
        background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(29, 29, 29, 0.65) 71.52%);
    }

    :host(:${c.b}) {
        outline: 1px solid transparent;
        box-shadow: 0 0 0 1px ${s.Avx};
    }

    .follow-icon {
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.25);
        fill: #212121;
    }

    .heading {
        width: 85%;
        margin: 8px 6px;
        color: white;
        text-align: start;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 600;
        font-size: var(--type-ramp-minus-1-font-size);
        line-height: var(--type-ramp-minus-1-line-height);
        max-height: calc(var(--type-ramp-minus-1-line-height) * 2);
        position: absolute;
        bottom: 0;
    }

    .image {
        width: 100%;
    }

    .mask {
        position: absolute;
        top: 30%;
        left: 0;
        width: 100%;
        height: 70%;
        background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(29, 29, 29, 0.65) 71.52%);
    }
`.withBehaviors((0,p.vF)(u.i`
                .icon > svg {
                    fill: ${h.H.ButtonFace};
                }
                
                .icon {
                    background: ${h.H.ButtonText};
                }
                
                :host(:hover) .icon,
                :host(:${c.b}) .icon {
                    background: ${h.H.HighlightText};
                }
                
                :host(:hover) .icon > svg,
                :host(:${c.b}) .icon > svg {
                    fill: ${h.H.Highlight};
                }
            `),new g.Y(u.i``,m));var f=i(68402),b=i(8686),x=i(99478),y=i(39181);const C=y.d`
    <template
        tabindex="0"
        role="button"
        title="${t=>t.selected?t.unfollowAriaLabel&&(0,x.WU)(t.unfollowAriaLabel,t.heading):t.followAriaLabel&&(0,x.WU)(t.followAriaLabel,t.heading)}"
        aria-label="${t=>t.selected?t.unfollowAriaLabel&&(0,x.WU)(t.unfollowAriaLabel,t.heading):t.followAriaLabel&&(0,x.WU)(t.followAriaLabel,t.heading)}"
        @click="${t=>t.toggleSelected&&t.toggleSelected()}"
        @keypress="${(t,e)=>t.handleKeyPress&&t.handleKeyPress(e.event)}"
        data-t="${t=>t.selected?t.unselectTelemetryTag:t.selectTelemetryTag}"
    >
        <img role="none" class="image" src="${t=>t.imgSrc}"/>
        <div class="mask"></div>
        <span role="presentation" class="heading" part="heading">
            ${t=>t.heading}
        </span>
        <div role="none" class="icon-container">
            <span class="icon${t=>t.selected?" check-icon":" follow-icon"}">
                ${t=>t.selected?y.d`${b.Z}`:y.d`${f.Z}`}
            </span>
        </div>
    </template>
`;let w=class extends r{};w=(0,a.gn)([(0,o.M)({name:"msn-follow-square-card",template:C,styles:v})],w)},74553:function(t,e,i){i.d(e,{N:function(){return R}});var a=i(33940),o=i(63070),n=i(61977),r=i(65033),s=i(26922),l=i(12249),d=i(57905),c=i(89346),p=i(65620),g=i(87697);class h extends c.H{constructor(){super(...arguments),this.actionAlignment="horizontal"}actionsSlottedNodesChanged(){var t;null===(t=this.actionsSlottedNodes[0])||void 0===t||t.focus()}}(0,a.gn)([(0,p.Lj)({attribute:"align-actions"})],h.prototype,"actionAlignment",void 0),(0,a.gn)([p.Lj],h.prototype,"hideStoryTitle",void 0),(0,a.gn)([p.Lj],h.prototype,"hideStorySubtitle",void 0),(0,a.gn)([g.LO],h.prototype,"actionsSlottedNodes",void 0);var u=i(67020),m=i(40082),v=i(26755),f=i(22674),b=i(16859),x=i(18544),y=i(97164),C=i(52708),w=i(89967),$=i(17533),k=i(22263),L=i(53046),T=i(13400),S=i(64893),F=i(15933);const A=L.i`
    :host(.hide-feedback[card-size="_1x_1y"]) ::slotted(fluent-menu-item#Undo) {
        right: 0;
    }
`,I=L.i`
    :host(.hide-feedback[card-size="_1x_1y"]) ::slotted(fluent-menu-item#Undo) {
        left: 0;
    }
`,M=L.i`
    :host {
        --hide-story-background: ${(0,y.A4)((()=>x.dw))(C.ZP)};
        --button-color: ${(0,w.wF)((0,y.A4)((()=>x.dw)))(C.ZP)};
        --button-hover-color: ${(0,w.Xi)((0,y.A4)((()=>x.dw)))(C.ZP)};
        --stealth-button-color: ${(0,$.jq)((0,y.A4)((()=>x.dw)))(C.ZP)};
        --stealth-button-text-color: ${(0,k.Q)((0,y.A4)((()=>x.dw)))(C.ZP)};
    }

    :host(.hide-feedback.instant-hide) {
        ${(0,S.cN)(T.jG.CurrentMarket)?"--hide-story-background: linear-gradient(-90deg, #F6FAFF 2%, #F7FCFF 31.46%, #EAF6FF 97.33%);":"--hide-story-background: linear-gradient(90deg, #F6FAFF 2%, #F7FCFF 31.46%, #EAF6FF 97.33%);"}
    }
`,_=L.i`
    :host {
        --hide-story-background: ${(0,y.l$)((()=>x.m0))(C.ZP)};
        --button-color: ${(0,w.wF)((0,y.l$)((()=>x.m0)))(C.ZP)};
        --button-hover-color: ${(0,w.Xi)((0,y.l$)((()=>x.m0)))(C.ZP)};
        --stealth-button-color: ${(0,$.jq)((0,y.l$)((()=>x.m0)))(C.ZP)};
        --stealth-button-text-color: ${(0,k.Q)((0,y.l$)((()=>x.m0)))(C.ZP)};
    }
`,j=L.i`
    :host {
        forced-color-adjust: auto;
    }

    :host(.hide-feedback) ::slotted(fluent-menu-item) {
        border-color: ${F.H.ButtonText};
    }

    :host(.hide-feedback) ::slotted(fluent-menu-item:hover),
    :host(.hide-feedback) ::slotted(fluent-menu-item:focus) {
        background-color: ${F.H.Highlight};
        color: ${F.H.HighlightText};
    }

    :host(.hide-feedback) ::slotted(fluent-menu-item:focus),
    :host(.hide-feedback) ::slotted(fluent-button:focus) {
        border-color: ${F.H.ButtonText};
        box-shadow: 0 0 0 calc((var(--focus-stroke-width) - var(--stroke-width)) * 1px) ${F.H.ButtonText};
    }

    :host(.hide-feedback) ::slotted(.stealth-button:hover),
    :host(.hide-feedback) ::slotted(.stealth-button:focus) {
        color: var(--stealth-button-text-color);
    }
`,B=L.i`
        ${(0,u.j)("flex")} :host {
            --action-region-padding-top: 0;
            --content-region-padding-top: 16px;
            --content-region-width: 236px;
            box-sizing: border-box;
            flex-direction: column;
            height: 100%;
            position: relative;
            width: 100%;
        }

        :host(.hide-confirm[card-size="_1x_1y"]) .content-region {
            margin-inline: 28px;
        }

        :host(.hide-confirm[card-size="_1x_1y"]) ::slotted(fluent-button:hover),
        :host(.hide-feedback.hide-confirm[card-size="_1x_1y"]) ::slotted(fluent-button.stealth-button:hover){
            background: var(--button-hover-color);
        }

        :host(.hide-confirm[card-size="_1x_1y"]) ::slotted(fluent-button),
        :host(.hide-feedback[card-size="_1x_1y"]) ::slotted(fluent-menu-item),
        :host(.hide-feedback.instant-hide[card-size="_1x_1y"]) ::slotted(fluent-button.stealth-button) {
            height: 24px;
            font-size: var(--type-ramp-minus-1-font-size, 12px);
            color: var(--neutral-foreground-rest);
            background: var(--button-color);
        }

        :host(.hide-feedback[card-size="_1x_1y"]) ::slotted(fluent-menu-item#Undo) {
            position: absolute;
            height: 18px;
            width: 18px;
            top: 0;
            margin-inline-end: 8px;
            margin-top: 8px;
            min-width: 18px;
        }

        :host([card-size="_1x_1y"]) .content-region {
            padding-top: 20px;
            height: 40px;
            width: 232px;
        }

        :host([card-size="_1x_1y"]) ::slotted(fluent-menu-item) {  
            height: 24px;
        }

        :host([card-size="_1x_1y"]) .action-region {
            padding-top: 10px;
            padding-bottom: 14px;
        }

        .action-region {
            display: flex;
            position: absolute;
            padding: 0 16px 16px;
            padding-top: var(--action-region-padding-top);
            justify-content: space-around;
            bottom: 0;
            width: 100%;
            box-sizing: border-box;
            align-items: center;
        }

        :host([align-actions="vertical"]) .action-region {
            display: block;
            margin: auto;
            position: static;
        }

        .content-region {
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            padding: 16px 16px 0 16px;
            padding-top: var(--content-region-padding-top);
            cursor: default;
        }

        :host([align-actions="vertical"]) .content-region {
            display: block;
            margin: auto;
            text-align: center;
            width: var(--content-region-width);
        }

        .heading,
        ::slotted(.heading) {
            text-decoration: none;
            color: ${v.CHi};
            font-size: var(--heading-font-size, ${v.PwC});
            line-height: var(--heading-line-height, ${v.b3W});
            font-weight: 600;
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: var(--heading-max-lines, 2);
        }

        .subheading {
            font-size: var(--subheading-font-size, ${v.cSu});
            line-height: var(--subheading-line-height, ${v.RUt});
            color: var(--stealth-button-text-color);
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: var(--heading-max-lines, 2);
        }

        ::slotted(fluent-button) {
            margin-bottom: 8px;
            width: 48%;
        }

        :host(.hide-feedback) {
            background: var(--hide-story-background);
        }

        :host(.hide-feedback) ::slotted(fluent-menu-item),
        :host(.hide-confirm) ::slotted(fluent-button) {
            background: var(--button-color);
            border: calc(var(--stroke-width) * 1px) solid transparent;
        }

        :host(.hide-feedback) ::slotted(.stealth-button) {
            background: var(--stealth-button-color);
            color: var(--stealth-button-text-color);
        }

        :host(.hide-feedback.instant-hide) ::slotted(.stealth-button) {
            background: transparent;
        }

        :host(.hide-feedback) ::slotted(fluent-menu-item:hover),
        :host(.hide-confirm) ::slotted(fluent-button:hover),
        :host(.hide-feedback.hide-confirm) ::slotted(.stealth-button:hover) {
            background: var(--button-hover-color);
        }

        :host(.hide-feedback) ::slotted(fluent-menu-item:focus),
        :host(.hide-feedback) ::slotted(fluent-button:focus) {
            border: calc(var(--stroke-width) * 1px) solid var(--focus-stroke-outer);
            box-shadow: 0 0 0 calc((var(--focus-stroke-width) - var(--stroke-width)) * 1px) var(--focus-stroke-outer);
        }

        :host(.hide-feedback) ::slotted(.stealth-button:hover),
        :host(.hide-feedback) ::slotted(.stealth-button:focus) {
            background: var(--stealth-button-color);
        }
    `.withBehaviors(new f.O(A,I),(0,m.vF)(j),new b.Y(M,_));var z=i(39181),E=i(13988),H=i(90960),O=i(58689);const D=z.d`
    <div class="content-region" part="content-region">
        <slot name="heading">
            <span class="heading" part="heading">${t=>t.hideStoryTitle}</span>
        </slot>
        ${(0,E.g)((t=>t.hideStorySubtitle),z.d`
            <span class="subheading" part="subheading">${t=>t.hideStorySubtitle}</span>
        `)}
    </div>
    <div class="action-region" part="action-region">
        <slot name="actions" ${(0,H.Q)({property:"actionsSlottedNodes",filter:(0,O.R)("fluent-radio, fluent-button, fluent-anchor, fluent-menu-item")})}></slot>
    </div>
`;let R=class extends h{};R=(0,a.gn)([(0,c.M)({name:"msn-hide-story-card",template:D,styles:B,shadowOptions:{delegatesFocus:!0}})],R),(0,o.z)().withShadowRootMode("closed").withElementDisambiguation((()=>d.h.ignoreDuplicate)).register((0,n.hb)(),(0,r.d$)(),(0,s.QT)(),(0,l.H5)())},35099:function(t,e,i){i.d(e,{Ii:function(){return $},pB:function(){return k}});var a=i(33940),o=i(89346),n=i(65620);class r extends o.H{constructor(){super(...arguments),this.enabled=!1}}(0,a.gn)([n.Lj],r.prototype,"icon",void 0),(0,a.gn)([n.Lj],r.prototype,"text",void 0),(0,a.gn)([n.Lj],r.prototype,"extraBadgeStyle",void 0),(0,a.gn)([(0,n.Lj)({mode:"boolean"})],r.prototype,"enabled",void 0),(0,a.gn)([n.Lj],r.prototype,"layout",void 0);var s=i(39181);const l=s.d`<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 4H1V7.5C1 7.776 1.224 8 1.5 8H2.5C2.776 8 3 7.776 3 7.5V7H7V7.5C7 7.776 7.224 8 7.5 8H8.5C8.776 8 9 7.776 9 7.5V4H9.5C9.776 4 10 3.776 10 3.5C10 3.224 9.776 3 9.5 3H8.75L8.284 1.136C8.117 0.468 7.517 0 6.829 0H3.171C2.483 0 1.883 0.468 1.716 1.136L1.25 3H0.5C0.224 3 0 3.224 0 3.5C0 3.776 0.224 4 0.5 4ZM6 6H4C3.724 6 3.5 5.776 3.5 5.5C3.5 5.224 3.724 5 4 5H6C6.276 5 6.5 5.224 6.5 5.5C6.5 5.776 6.276 6 6 6ZM8.25 4.5C8.25 4.914 7.914 5.25 7.5 5.25C7.086 5.25 6.75 4.914 6.75 4.5C6.75 4.086 7.086 3.75 7.5 3.75C7.914 3.75 8.25 4.086 8.25 4.5ZM2.687 1.379C2.742 1.157 2.942 1 3.171 1H6.829C7.058 1 7.258 1.157 7.313 1.379L7.719 3H2.281L2.687 1.379ZM2.5 3.75C2.914 3.75 3.25 4.086 3.25 4.5C3.25 4.914 2.914 5.25 2.5 5.25C2.086 5.25 1.75 4.914 1.75 4.5C1.75 4.086 2.086 3.75 2.5 3.75ZM11.5 6H10.5C10.224 6 10 6.224 10 6.5V9H0.5C0.224 9 0 9.224 0 9.5C0 9.776 0.224 10 0.5 10H11.5C11.776 10 12 9.776 12 9.5V6.5C12 6.224 11.776 6 11.5 6Z" fill="black" fill-opacity="0.83"/>
</svg>
`,d=s.d`<svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.38909 11.6701L8.63932 12.4338C8.08675 12.9924 7.36969 13.7106 6.48803 14.5885C5.93704 15.1372 5.06295 15.1371 4.51208 14.5884L2.30692 12.3792C2.02977 12.0989 1.79778 11.8626 1.61091 11.6701C-0.536971 9.45796 -0.536971 5.87129 1.61091 3.65913C3.7588 1.44696 7.24121 1.44696 9.38909 3.65913C11.537 5.87129 11.537 9.45796 9.38909 11.6701ZM7.07926 7.84334C7.07926 6.94501 6.37218 6.21679 5.49999 6.21679C4.6278 6.21679 3.92074 6.94501 3.92074 7.84334C3.92074 8.74163 4.6278 9.46986 5.49999 9.46986C6.37218 9.46986 7.07926 8.74163 7.07926 7.84334Z" fill="#717171"/>
</svg>
`,c=s.d`<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.06591 0.163636L0.156818 5.07273C-0.0522727 5.28182 -0.0522727 5.62727 0.156818 5.84545L4.15682 9.84545C4.36591 10.0545 4.71136 10.0545 4.92955 9.84545L9.83864 4.93636C9.93864 4.82727 9.99318 4.69091 9.99318 4.54545V0.545455C9.99318 0.245455 9.74773 0 9.44773 0H5.44773C5.30227 0 5.16591 0.0545455 5.06591 0.163636ZM8.52955 2.77273C8.475 2.89091 8.40227 3 8.31136 3.09091C8.22046 3.18182 8.12045 3.25455 7.99318 3.3C7.86591 3.34545 7.74773 3.38182 7.61136 3.38182C7.475 3.38182 7.33864 3.35455 7.22045 3.3C7.10227 3.25455 6.99318 3.18182 6.90227 3.09091C6.81136 3 6.73864 2.89091 6.69318 2.77273C6.63864 2.65455 6.61136 2.52727 6.61136 2.38182C6.61136 2.23636 6.63864 2.10909 6.69318 1.99091C6.73864 1.88182 6.81136 1.77273 6.90227 1.69091C6.99318 1.6 7.10227 1.52727 7.22045 1.47273C7.33864 1.41818 7.46591 1.39091 7.61136 1.39091C7.75682 1.39091 7.88409 1.41818 8.00227 1.47273C8.12046 1.52727 8.22955 1.6 8.31136 1.69091C8.40227 1.78182 8.475 1.88182 8.52955 2C8.58409 2.11818 8.61136 2.24545 8.61136 2.39091C8.61136 2.53636 8.575 2.65455 8.52955 2.77273Z" fill="white"/>
</svg>
`,p=s.d`<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.60838 0.745943L0.244749 8.10958C-0.0688876 8.42322 -0.0688876 8.9414 0.244749 9.26867L6.24475 15.2687C6.55838 15.5823 7.07657 15.5823 7.40384 15.2687L14.7675 7.90503C14.9175 7.7414 14.9993 7.53685 14.9993 7.31867V1.31867C14.9993 0.86867 14.6311 0.500488 14.1811 0.500488H8.18111C7.96293 0.500488 7.75838 0.582306 7.60838 0.745943ZM12.8038 4.65958C12.722 4.83685 12.6129 5.00049 12.4766 5.13685C12.3402 5.27322 12.1902 5.38231 11.9993 5.45049C11.8084 5.51867 11.6311 5.57322 11.4266 5.57322C11.222 5.57322 11.0175 5.53231 10.8402 5.45049C10.6629 5.38231 10.4993 5.27322 10.3629 5.13685C10.2266 5.00049 10.1175 4.83685 10.0493 4.65958C9.96748 4.48231 9.92657 4.2914 9.92657 4.07322C9.92657 3.85503 9.96748 3.66412 10.0493 3.48685C10.1175 3.32322 10.2266 3.15958 10.3629 3.03685C10.4993 2.90049 10.6629 2.7914 10.8402 2.70958C11.0175 2.62776 11.2084 2.58685 11.4266 2.58685C11.6447 2.58685 11.8357 2.62776 12.0129 2.70958C12.1902 2.7914 12.3538 2.90049 12.4766 3.03685C12.6129 3.17322 12.722 3.32322 12.8038 3.50049C12.8857 3.67776 12.9266 3.86867 12.9266 4.08685C12.9266 4.30503 12.872 4.48231 12.8038 4.65958Z" fill="#717171"/>
</svg>
`,g=s.d`<svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.27351 0.971551C5.57068 0.342816 6.4293 0.342816 6.72646 0.971551L8.14149 3.96535L11.3055 4.44543C11.97 4.54625 12.2353 5.39895 11.7545 5.88833L9.46494 8.21866L10.0054 11.5092C10.1189 12.2002 9.42431 12.7272 8.82998 12.4009L5.99999 10.8474L3.17001 12.4009C2.57569 12.7272 1.88105 12.2002 1.99456 11.5092L2.53504 8.21866L0.245535 5.88833C-0.235291 5.39895 0.030035 4.54625 0.69452 4.44543L3.85854 3.96535L5.27351 0.971551Z" fill="#717171"/>
</svg>
`;class h extends r{constructor(){super(),this.isInfoPane=!1}badgeTypeChanged(){"CurbsidePickup"===this.badgeType?(this.icon=l,this.enabled=!0):"OnSale"===this.badgeType?(this.icon=c,this.enabled=!0):"PriceDrop"===this.badgeType?(this.icon=p,this.enabled=!0):"LocalInventory"===this.badgeType?(this.icon=d,this.enabled=!0):"NewProduct"===this.badgeType&&(this.icon=g,this.enabled=!0)}}(0,a.gn)([n.Lj],h.prototype,"badgeType",void 0),(0,a.gn)([n.Lj],h.prototype,"badgeStyle",void 0),(0,a.gn)([n.Lj],h.prototype,"text",void 0),(0,a.gn)([(0,n.Lj)({mode:"boolean",attribute:"is-info-pane"})],h.prototype,"isInfoPane",void 0);var u=i(53046),m=i(81493);const v=u.i`
    .info-pane .image-badge,
    .river .image-badge {
        background: #0078D4;
    }

    .info-pane .image-badge .badge-text,
    .river .image-badge .badge-text {
        position: static;
        width: auto;
        height: 16px;
        left: 22px;
        top: 2px;
        
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        /* identical to box height, or 133% */
        
        text-transform: uppercase;
        
        /* DEPRECATED/Dk : Fore/Rest */
        
        color: #FFFFFF;
    }

    .info-pane .badge-icon path,
    .river .badge-icon path {
        fill: #FFFFFF;
    }
`,f=u.i`
    /* below style is scoped to only light theme and river card */
    .river .image-badge {
        background: rgba(0, 0, 0, 0.54);
    }
    
    .river .image-badge .badge-text {
        position: static;
        width: auto;
        height: 16px;
        left: 22px;
        top: 2px;
        
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        /* identical to box height, or 133% */
        
        text-transform: uppercase;
        
        /* DEPRECATED/Dk : Fore/Rest */
        
        color: #FFFFFF;
    }
    
    .river .image-background-gradient {
        position: absolute;
        background: linear-gradient(to left top, rgba(180, 180, 180, 0) 3.99%, rgba(180, 180, 180, 0.05) 57.8%, rgba(180, 180, 180, 0.15) 75.35%, rgba(180, 180, 180, 0.3) 100%);
        width: 100%;
        height: 50px;
        z-index: 1;
    }

    .river .badge-icon path {
        fill: #FFFFFF;
    }
`,b=u.i`
    .image-badge-decorator {
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    .image-badge {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 2px 8px 2px 4px;

        position: absolute;
        width: auto;
        height: 20px;
        left: 8px;
        top: 8px;

        background: rgba(255, 255, 255, 0.8);
        border-radius: 4px;
        z-index: 1;
    }

    .badge-icon {
        line-height: 14px;
        margin-left: 4px;
    }

    .badge-text {
        position: static;
        height: 16px;
        right: 12px;
        top: 8.5px;

        font-size: 12px;
        font-weight: 600;
        line-height: 14px;
        display: flex;
        align-items: center;
        text-align: right;

        /* Inside Auto Layout */

        flex: none;
        order: 5;
        flex-grow: 0;
        margin-left: 8px;
        text-transform: uppercase;
    }

    .image-badge-wrapper {
        z-index: 1;
    }

    /*
    design requirement
    river card:
        light theme: badge has black text on white background, with a black gradient applied to the image
        dark theme: badge has white text on black background, no gradient
    info pane:
        always the same as river card dark theme disregard actual theme being used
    */

    .image-badge {
        background: rgba(43, 43, 43, 0.7);
    }
    
    .badge-text {
        /* Lt: Fore (Black) */    
        color: white;
    }

    .badge-icon path {
        fill: white;
    }

    ${f}
`.withBehaviors(new m.w("_badgeStyle","standingOut",u.i`
            ${v}
        `),new m.w("_badgeStyle","blendedIn",u.i`
            ${f}
        `));var x=i(13988);const y=s.d`
    <div class="image-badge-decorator" layout=${t=>t.layout}>
        ${(0,x.g)((t=>t.enabled),s.d`
                <div class="image-badge-wrapper ${t=>t.isInfoPane?"info-pane":"river"}" style=${t=>t.extraBadgeStyle}>
                    <div class="image-background-gradient"></div>
                    <div class="image-badge">
                        <div class="badge-icon">${t=>t.icon}</div>
                        <div class="badge-text">${t=>t.text}</div>
                    </div>
                </div>
                <span part="image-with-badge">
                    <slot name="image-with-badge"></slot>
                </span>
        `)}
        ${(0,x.g)((t=>!t.enabled),s.d`
            <slot name="image-with-badge"></slot>
        `)}
    </div>
`,C=u.i`
    .image-badge-decorator {
        position: relative;
        filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 0px 4px);
    }

    .image-badge-wrapper {
        height: var(--z-index-image-height);
        width: var(--z-index-image-width);
        position: absolute;
        margin: 12px;
    }

    @media (prefers-color-scheme: light) {
        .image-badge-decorator[layout="imageAtBottom"] {
            .image-background-gradient {
                background: linear-gradient(120.95deg, rgba(34, 34, 34, 0) 3.99%, rgba(34, 34, 34, 0.05) 57.8%, rgba(34, 34, 34, 0.15) 75.35%, rgba(34, 34, 34, 0.35) 100%);
                transform: unset;
            }
        }

        .river .image-background-gradient {
            height: 100%;
        }
    }

    .image-badge-decorator[layout="imageAtBottom"] .image-badge {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: absolute;
        inset: auto 0 0 auto;
        border-radius: 20px 0px 0px 0px;
    }
`;let w=class extends r{};w=(0,a.gn)([(0,o.M)({name:"msn-raw-image-badge-decorator",template:y,styles:b})],w);let $=class extends h{};$=(0,a.gn)([(0,o.M)({name:"msn-image-badge-decorator",template:y,styles:b})],$);let k=class extends h{};k=(0,a.gn)([(0,o.M)({name:"msn-z-index-image-badge-decorator",template:y,styles:[b,C]})],k)},58888:function(t,e,i){i.d(e,{$W:function(){return q}});var a,o,n=i(33940),r=i(89346),s=i(33832),l=i(94731),d=i(65620),c=i(87697),p=i(26755);!function(t){t._1_column="1_column",t._2_column="2_column"}(a||(a={})),function(t){t.vertical="vertical",t.horizontal="horizontal"}(o||(o={}));class g extends r.H{constructor(){super(),this.slideKeyPressHandler=(t,e)=>{this.adjust(e),this.autoScrollHandler()},this.onPrevButtonClicked=()=>{this.adjust(-1),this.rotateBackAfterClickPrevButton&&(this.rotateDirection="backward"),this.rotateStopAfterClickPrevButton&&(this.rotateDirection="stay"),this.autoScrollHandler()},this.onNextButtonClicked=()=>{this.adjust(1),this.rotateDirection="forward",this.autoScrollHandler()},this.layout=a._2_column,this.freWelcomeAnimationRunning=!1,this.orientation=o.horizontal,this.activeindicator=!1,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>"true"===t.getAttribute("aria-disabled"),this.isFocusableElement=t=>!this.isDisabledElement(t),this.setTabs=()=>{const t=this.isHorizontal()?"gridColumn":"gridRow";this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex(),this.tabs.forEach(((e,i)=>{if("tab"===e.slot&&this.isFocusableElement(e)){this.activeindicator&&(this.showActiveIndicator=!0);const t=this.tabIds[i],a=this.tabpanelIds[i];e.setAttribute("id","string"!=typeof t?`tab-${i+1}`:t),e.setAttribute("aria-selected",this.activeTabIndex===i?"true":"false"),e.setAttribute("aria-controls","string"!=typeof a?`panel-${i+1}`:a),e.addEventListener("click",this.handleTabClick),e.addEventListener("keydown",this.handleTabKeyDown),e.setAttribute("tabindex",this.activeTabIndex===i?"0":"-1"),this.activeTabIndex===i&&(this.activetab=e)}else this.showActiveIndicator=!1;e.style[t]=`${i+1}`,this.isHorizontal()?e.classList.remove("vertical"):e.classList.add("vertical")})),this.tabsShowOrNot&&this.activeTabIndex>=0&&(this.tabsShowOrNot[this.activeTabIndex]=!0)},this.setTabPanels=()=>{this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.tabpanels.forEach(((t,e)=>{const i=this.tabIds[e],a=this.tabpanelIds[e];t.setAttribute("id","string"!=typeof a?`panel-${e+1}`:a),t.setAttribute("aria-labelledby","string"!=typeof i?`tab-${e+1}`:i),this.activeTabIndex!==e?t.setAttribute("hidden",""):t.removeAttribute("hidden")}))},this.handleTabClick=t=>{const e=t.currentTarget;1===e.nodeType&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(e),this.setComponent())},this.handleTabKeyDown=t=>{const e=t.keyCode;if(this.isHorizontal())switch(e){case s.BJ:t.preventDefault(),this.adjustBackward(t),this.enableInfopaneRefactoring&&(this.rotateBackAfterClickPrevButton&&(this.rotateDirection="backward"),this.rotateStopAfterClickPrevButton&&(this.rotateDirection="stay"));break;case s.ho:t.preventDefault(),this.adjustForward(t),this.enableInfopaneRefactoring&&(this.rotateDirection="forward")}else switch(e){case s.$Y:t.preventDefault(),this.adjustBackward(t),this.enableInfopaneRefactoring&&(this.rotateBackAfterClickPrevButton&&(this.rotateDirection="backward"),this.rotateStopAfterClickPrevButton&&(this.rotateDirection="stay"));break;case s.Q6:t.preventDefault(),this.adjustForward(t),this.enableInfopaneRefactoring&&(this.rotateDirection="forward")}switch(e){case s.wn:t.preventDefault(),this.adjust(-this.activeTabIndex),this.enableInfopaneRefactoring&&(this.rotateDirection="forward");break;case s.$B:t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1),this.enableInfopaneRefactoring&&(this.rotateDirection="forward")}},this.adjustForward=t=>{const e=this.tabs;let i=0;for(i=this.activetab?e.indexOf(this.activetab)+1:1,i===e.length&&(i=0);i<e.length&&e.length>1;){if(this.isFocusableElement(e[i])){this.moveToTabByIndex(e,i);break}if(this.activetab&&i===e.indexOf(this.activetab))break;i+1>=e.length?i=0:i+=1}},this.adjustBackward=t=>{const e=this.tabs;let i=0;for(i=this.activetab?e.indexOf(this.activetab)-1:0,i=i<0?e.length-1:i;i>=0&&e.length>1;){if(this.isFocusableElement(e[i])){this.moveToTabByIndex(e,i);break}i-1<0?i=e.length-1:i-=1}},this.moveToTabByIndex=(t,e)=>{const i=t[e];this.activetab=i,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=e,i.focus(),this.setComponent()},this.canAutoRotate=()=>this.enableInfopaneRefactoring?(this.enableRotateOnlyOnce&&!this.stopRotateDueShownAll&&0===this.activeTabIndex&&this.tabsShowOrNot&&this.tabsShowOrNot.every((t=>t))&&(this.stopRotateDueShownAll=!0),(!this.enableRotateAfterClick||!this.isFocusedOverAPeriodOfTime)&&(!this.stopRotateDueShownAll&&(!(!this.allowBlurScroll&&!this.isWindowFocused)&&(!(this.isFocused&&!this.enableRotateAfterClick)&&(!this.isMouseOver&&("visible"===document.visibilityState&&!!this.isInViewport)))))):!(this.enableRotateOnlyOnce&&0===this.activeTabIndex&&this.tabsShowOrNot&&this.tabsShowOrNot.every((t=>t)))&&(this.enableRotateAfterClick?(this.allowBlurScroll||!this.allowBlurScroll&&this.isWindowFocused)&&"visible"===document.visibilityState&&this.isInViewport:!this.isFocused&&!this.isMouseOver&&(this.allowBlurScroll||!this.allowBlurScroll&&this.isWindowFocused)&&"visible"===document.visibilityState&&this.isInViewport),this.updateAutoRotateState=()=>{const t=this.canAutoRotate();t&&!this.timer?this.autoScrollHandler():!t&&this.timer&&this.clearAutoScrollHandler()},this.focusInHandler=(()=>{this.enableInfopaneRefactoring?(this.updateIsFocusedOverAPeriodOfTime(),this.isFocused=!0,this.updateAutoRotateState()):this.isFocused=!0}).bind(this),this.focusOutHandler=(()=>{this.enableInfopaneRefactoring?(this.clearIsFocusedOverAPeriodOfTime(),this.isFocused=!1,this.updateAutoRotateState()):(this.isFocused=!1,this.autoScrollHandler())}).bind(this),this.windowFocusHandler=(()=>{this.enableInfopaneRefactoring?(this.isWindowFocused=!0,this.updateAutoRotateState()):(this.isWindowFocused=!0,this.autoScrollHandler())}).bind(this),this.windowBlurHandler=(()=>{this.enableInfopaneRefactoring?(this.isWindowFocused=!1,this.updateAutoRotateState()):this.isWindowFocused=!1}).bind(this),this.mouseInHandler=(()=>{this.enableInfopaneRefactoring?(this.isMouseOver=!0,this.updateAutoRotateState()):(this.isMouseOver=!0,this.autoScrollHandler())}).bind(this),this.mouseOutHandler=(()=>{this.enableInfopaneRefactoring?(this.isMouseOver=!1,this.updateAutoRotateState()):(this.isMouseOver=!1,this.autoScrollHandler())}).bind(this),this.windowVisiabilityChange=(()=>{this.updateAutoRotateState()}).bind(this)}handleChange(){this.direction=p.o7V.getValueFor(this)}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex(),this.isFocused=!1,this.isWindowFocused=!0,this.isMouseOver=!1,this.rotateDirection="forward",this.direction=p.o7V.getValueFor(this),p.o7V.subscribe(this,this),this.activeindicator||(this.activeindicator=!1),this.addEventListeners(),this.autoScrollHandler(),this.setIntersectionObserver()}disconnectedCallback(){this.enableInfopaneRefactoring?this.clearAutoScrollHandler():window.clearTimeout(this.timer),this.removeEventListeners(),this.unsetIntersectionObserver()}updateIsFocusedOverAPeriodOfTime(){this.isFocusedOverAPeriodOfTime=!0,this.focusTimer&&(window.clearTimeout(this.focusTimer),this.focusTimer=null),this.focusTimer=window.setTimeout((()=>{this.isFocusedOverAPeriodOfTime=!1,this.updateAutoRotateState(),this.focusTimer=null}),(this.rotateAfterClickIntervalMs||1e4)-(this.autoScrollIntervalMs||6e3))}clearIsFocusedOverAPeriodOfTime(){this.focusTimer&&(window.clearTimeout(this.focusTimer),this.focusTimer=null),this.isFocusedOverAPeriodOfTime=!1}clearAutoScrollHandler(){this.timer&&window.clearTimeout(this.timer),this.timer=null}autoScrollHandler(t=0){if(this.enableInfopaneRefactoring){if(this.disableAutoScroll||this.freWelcomeAnimationRunning)return void this.clearAutoScrollHandler();let e=0;e=t||(0===this.activeTabIndex&&void 0!==this.firstAutoScrollIntervalMs?this.firstAutoScrollIntervalMs:this.autoScrollIntervalMs||6e3),this.clearAutoScrollHandler(),this.timer=window.setTimeout((()=>{if(this.timer=null,this.canAutoRotate()){switch(this.rotateDirection){case"forward":this.adjust(1,!0);break;case"backward":this.adjust(-1,!0)}performance.mark("InfoPaneAR"),this.autoScrollHandler()}}),e)}else{if(this.disableAutoScroll||this.freWelcomeAnimationRunning)return void window.clearTimeout(this.timer);let t=0;t=0===this.activeTabIndex&&void 0!==this.firstAutoScrollIntervalMs?this.firstAutoScrollIntervalMs:this.autoScrollIntervalMs||6e3,this.timer&&window.clearTimeout(this.timer),this.timer=window.setTimeout((()=>{this.canAutoRotate()&&(this.adjust(1,!0),performance.mark("InfoPaneAR")),this.autoScrollHandler()}),t)}}activeidChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(t,e){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition()),e&&(this.tabsShowOrNot=e.map((()=>!1)),this.stopRotateDueShownAll=!1)}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition(),this.activeid=this.tabIds[this.activeTabIndex])}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((t=>t.getAttribute("id")))}getTabPanelIds(){return this.tabpanels.map((t=>t.getAttribute("id")))}setComponent(t){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.change(),this.setTabs(),this.handleActiveIndicatorPosition(),this.setTabPanels(),t||this.focusTab(),this.change())}isHorizontal(){return this.orientation===o.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const t=this.isHorizontal()?"gridColumn":"gridRow",e=this.isHorizontal()?"translateX":"translateY",i=this.isHorizontal()?"offsetLeft":"offsetTop",a=this.activeIndicatorRef[i];this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`;const o=this.activeIndicatorRef[i]-a;0!=o&&(this.activeIndicatorRef.style[t]=`${this.prevActiveTabIndex+1}`),this.activeIndicatorRef.style.transform=`${e}(${o}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${e}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(t,e){this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=(0,l.w)(0,this.tabs.length-1,this.activeTabIndex+t),this.setComponent(e)}focusTab(){this.tabs[this.activeTabIndex].focus()}addEventListeners(){this.addEventListener("mouseenter",this.mouseInHandler,!0),this.addEventListener("focusin",this.focusInHandler,!0),this.addEventListener("focusout",this.focusOutHandler,!0),this.addEventListener("mouseleave",this.mouseOutHandler,!0),this.allowBlurScroll||(this.enableInfopaneRefactoring&&document.addEventListener("visibilitychange",this.windowVisiabilityChange,!0),window.addEventListener("focus",this.windowFocusHandler,!0),window.addEventListener("blur",this.windowBlurHandler,!0))}removeEventListeners(){this.removeEventListener("mouseenter",this.mouseInHandler),this.removeEventListener("focusin",this.focusInHandler),this.removeEventListener("focusout",this.focusOutHandler),this.removeEventListener("mouseleave",this.mouseOutHandler),this.allowBlurScroll||(this.enableInfopaneRefactoring&&document.removeEventListener("visibilitychange",this.windowVisiabilityChange),window.removeEventListener("focus",this.windowFocusHandler),window.removeEventListener("blur",this.windowBlurHandler))}setIntersectionObserver(){if(this.intersectionObserver)return;this.intersectionObserver=new IntersectionObserver((t=>{this.isInViewport=t[0].intersectionRatio>0,this.enableInfopaneRefactoring&&this.updateAutoRotateState()}),{threshold:[0]}),this.intersectionObserver.observe(this)}unsetIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}}(0,n.gn)([d.Lj],g.prototype,"layout",void 0),(0,n.gn)([(0,d.Lj)({attribute:"auto-scroll",mode:"boolean"})],g.prototype,"autoScroll",void 0),(0,n.gn)([(0,d.Lj)({attribute:"disable-auto-scroll",mode:"boolean"})],g.prototype,"disableAutoScroll",void 0),(0,n.gn)([(0,d.Lj)({attribute:"enable-rotate-after-click",mode:"boolean"})],g.prototype,"enableRotateAfterClick",void 0),(0,n.gn)([d.Lj],g.prototype,"rotateAfterClickIntervalMs",void 0),(0,n.gn)([(0,d.Lj)({attribute:"auto-scroll-interval-ms"})],g.prototype,"autoScrollIntervalMs",void 0),(0,n.gn)([(0,d.Lj)({attribute:"first-auto-scroll-interval-ms"})],g.prototype,"firstAutoScrollIntervalMs",void 0),(0,n.gn)([(0,d.Lj)({attribute:"allow-blur-scroll",mode:"boolean"})],g.prototype,"allowBlurScroll",void 0),(0,n.gn)([(0,d.Lj)({attribute:"use-windows-styles",mode:"boolean"})],g.prototype,"useWindowsStyles",void 0),(0,n.gn)([(0,d.Lj)({attribute:"enable-rotate-only-once",mode:"boolean"})],g.prototype,"enableRotateOnlyOnce",void 0),(0,n.gn)([(0,d.Lj)({attribute:"enable-infopane-refactoring",mode:"boolean"})],g.prototype,"enableInfopaneRefactoring",void 0),(0,n.gn)([(0,d.Lj)({attribute:"rotate-prev-after-click-prev-button",mode:"boolean"})],g.prototype,"rotateBackAfterClickPrevButton",void 0),(0,n.gn)([(0,d.Lj)({attribute:"rotate-stop-after-click-prev-button",mode:"boolean"})],g.prototype,"rotateStopAfterClickPrevButton",void 0),(0,n.gn)([c.LO],g.prototype,"previousFlipperTitle",void 0),(0,n.gn)([c.LO],g.prototype,"nextFlipperTitle",void 0),(0,n.gn)([c.LO],g.prototype,"nextFlipperTelemetryTag",void 0),(0,n.gn)([c.LO],g.prototype,"previousFlipperTelemetryTag",void 0),(0,n.gn)([c.LO],g.prototype,"direction",void 0),(0,n.gn)([d.Lj],g.prototype,"orientation",void 0),(0,n.gn)([d.Lj],g.prototype,"activeid",void 0),(0,n.gn)([c.LO],g.prototype,"tabs",void 0),(0,n.gn)([c.LO],g.prototype,"tabpanels",void 0),(0,n.gn)([(0,d.Lj)({mode:"boolean"})],g.prototype,"activeindicator",void 0),(0,n.gn)([c.LO],g.prototype,"activeIndicatorRef",void 0),(0,n.gn)([c.LO],g.prototype,"showActiveIndicator",void 0);var h=i(51208),u=i(39181),m=i(13988),v=i(90960),f=i(58952),b=i(60577),x=i(34550),y=i(26007);const C=u.d`
<span part="next" class="next">
    <slot name="next">
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.023 15.273L11.29 8 4.023.727l.704-.704L12.71 8l-7.984 7.977-.704-.704z"
            />
        </svg>
    </slot>
</span>`,w=u.d`
<span part="previous" class="previous">
    <slot name="previous">
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.273 15.977L3.29 8 11.273.023l.704.704L4.71 8l7.266 7.273-.704.704z"
            />
        </svg>
    </slot>
</span>`,$=u.d`
    <slot name="previous-flipper">
        <button
            title="${t=>t.previousFlipperTitle}"
            part="previous-flipper"
            class="previous-flipper ${t=>t.useWindowsStyles?"windows":""}"
            tabIndex="0"
            @keypress="${(t,e)=>t.enableInfopaneRefactoring?t.onPrevButtonClicked():t.slideKeyPressHandler(e.event,-1)}"
            @click="${(t,e)=>t.enableInfopaneRefactoring?t.onPrevButtonClicked():t.slideKeyPressHandler(e.event,-1)}"
            data-t="${t=>t.previousFlipperTelemetryTag}">
            ${(0,m.g)((t=>t.direction===y.N.rtl),u.d`
                ${(0,m.g)((t=>t.useWindowsStyles),u.d`${x.Z}`)}
                ${(0,m.g)((t=>!t.useWindowsStyles),C)}
            `)}
            ${(0,m.g)((t=>t.direction===y.N.ltr),u.d`
                ${(0,m.g)((t=>t.useWindowsStyles),u.d`${b.Z}`)}
                ${(0,m.g)((t=>!t.useWindowsStyles),w)}
            `)}
        </button>
    </slot>
    ${h.hX}
    <div class="tablist ${t=>t.useWindowsStyles?"windows":""}" part="tablist" role="tablist">
        <slot class="tab" name="tab" part="tab" ${(0,v.Q)("tabs")}></slot>

        ${(0,m.g)((t=>t.activeindicator),u.d`
                <div
                    ${(0,f.i)("activeIndicatorRef")}
                    class="activeIndicator"
                    part="activeIndicator"
                ></div>
            `)}
    </div>
    <slot name="next-flipper">
        <button
            title="${t=>t.nextFlipperTitle}"
            part="next-flipper"
            class="next-flipper ${t=>t.useWindowsStyles?"windows":""}"
            tabIndex="0"
            @keypress="${(t,e)=>t.enableInfopaneRefactoring?t.onNextButtonClicked():t.slideKeyPressHandler(e.event,1)}"
            @click="${(t,e)=>t.enableInfopaneRefactoring?t.onNextButtonClicked():t.slideKeyPressHandler(e.event,1)}"
            data-t="${t=>t.nextFlipperTelemetryTag}">
            ${(0,m.g)((t=>t.direction===y.N.rtl),u.d`
                ${(0,m.g)((t=>t.useWindowsStyles),u.d`${b.Z}`)}
                ${(0,m.g)((t=>!t.useWindowsStyles),w)}
            `)}
            ${(0,m.g)((t=>t.direction===y.N.ltr),u.d`
                ${(0,m.g)((t=>t.useWindowsStyles),u.d`${x.Z}`)}
                ${(0,m.g)((t=>!t.useWindowsStyles),C)}
            `)}
        </button>
    </slot>

    ${h.zq}
    <div
        class="tabpanel"
        @on-welcome-animation=${(t,e)=>{t.freWelcomeAnimationRunning=!0,t.autoScrollHandler()}}
        @after-welcome-animation=${(t,e)=>{t.freWelcomeAnimationRunning=!1,t.autoScrollHandler()}}
    >
        <slot name="tabpanel" part="tabpanel" ${(0,v.Q)("tabpanels")}></slot>
    </div>
`;var k=i(62734),L=i(22674),T=i(67020),S=i(40082),F=i(15933),A=i(53046),I=i(56201),M=i(95263);const _="M12.2676 15.793C11.9677 16.0787 11.493 16.0672 11.2073 15.7672L6.20597 10.5168C5.93004 10.2271 5.93004 9.77187 6.20597 9.4822L11.2073 4.23173C11.493 3.93181 11.9677 3.92028 12.2676 4.20597C12.5676 4.49166 12.5791 4.96639 12.2934 5.26631L7.78483 9.99949L12.2934 14.7327C12.5791 15.0326 12.5676 15.5073 12.2676 15.793Z",j="M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z",B=A.i`
    .previous-flipper.windows:hover > svg > path,
    .previous-flipper.windows:focus-visible > svg > path {
        d: path("${_}");
    }

    .next-flipper.windows:hover > svg > path,
    .next-flipper.windows:focus-visible > svg > path {
        d: path("${j}");
    }
`,z=A.i`
    .previous-flipper.windows:hover > svg > path,
    .previous-flipper.windows:focus-visible > svg > path {
        d: path("${j}");
    }

    .next-flipper.windows:hover > svg > path,
    .next-flipper.windows:focus-visible > svg > path {
        d: path("${_}");
    }
`,E=A.i`
    ${(0,T.j)("grid")} :host {
        --elevation: 4;
        box-sizing: border-box;
        font-family: ${p.SVJ};
        font-size: ${p.cSu};
        line-height: ${p.RUt};
        color: ${p.CHi};
        background: ${M.A4};
        border-radius: calc(${p.rSr} * 1px);
        ${k.XC};
        overflow: hidden;
        height: 100%;
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
        width: 100%;
    }

    :host(:hover) ::slotted([slot="previous-flipper"]),
    :host(:hover) .previous-flipper,
    :host(:hover) ::slotted([slot="next-flipper"]),
    :host(:hover) .next-flipper {
        opacity: 1;
        transition: opacity 0.2s ease-in-out;
    }

    .tablist {
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: auto;
        position: absolute;
        bottom: 6px;
        left: 50%;
        transform: translate(-50%);
        width: max-content;
        align-self: center;
        justify-self: center;
        grid-row: 1;
        grid-column: 1 / span 3;
        z-index: 3;
        cursor: pointer;
    }

    .tablist.windows {
        display: none;
    }

    .previous-flipper.windows,
    .next-flipper.windows {
        margin: 0 8px;
        width: 32px;
        height: 32px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0px;
        --elevation: 8;
        ${k.XC};
        background: ${p.CHi};
        fill: ${p.jql};
    }

    .previous-flipper.windows:hover,
    .next-flipper.windows:hover,
    .previous-flipper.windows:focus-visible,
    .next-flipper.windows:focus-visible {
        --elevation: 16;
    }

    ::slotted([slot="previous-flipper"]),
    .previous-flipper:not(.windows),
    ::slotted([slot="next-flipper"]),
    .next-flipper:not(.windows) {
        width: 30px;    
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        position: relative;
        fill: ${p.CHi};
        color: ${p.CHi};
        background: transparent;
        border: none;
        padding: 0;
    }

    ::slotted([slot="previous-flipper"]),
    .previous-flipper {
        grid-column: 1;
        grid-row: 1 / span 2;
        align-self: center;
        z-index: 2;
        opacity: 0;
    }

    ::slotted([slot="next-flipper"]),
    .next-flipper {
        grid-column: 3;
        grid-row: 1 / span 2;
        align-self: center;
        z-index: 2;
        opacity: 0;
    }

    ::slotted([slot="previous-flipper"])::before,
    .previous-flipper:not(.windows)::before,
    ::slotted([slot="next-flipper"])::before,
    .next-flipper:not(.windows)::before {
        content: "";
        opacity: 0.3;
        background: ${p.jql};
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        transition: all 0.1s ease-in-out;
    }

    .next,
    .previous {
        position: relative;
        ${""} width: 16px;
        height: 16px;
    }

    ::slotted([slot="previous-flipper"]:hover),
    .previous-flipper:hover,
    ::slotted([slot="next-flipper"]:hover),
    .next-flipper:hover {
        cursor: pointer;
    }

    ::slotted([slot="previous-flipper"]:${I.b}),
    .previous-flipper:${I.b},
    ::slotted([slot="next-flipper"]:${I.b}),
    .next-flipper:${I.b}{
        opacity: 1;
    }

    ::slotted([slot="previous-flipper"]:${I.b})::before,
    .previous-flipper:${I.b}::before,
    ::slotted([slot="next-flipper"]:${I.b})::before,
    .next-flipper:${I.b}::before {
        background: ${p.QpD};
        opacity: 1;
    }

    ::slotted([slot="previous-flipper"]:hover)::before,
    .previous-flipper:hover::before,
    ::slotted([slot="next-flipper"]:hover)::before,
    .next-flipper:hover::before {
        background: ${p.QpD};
        opacity: 1;
    }

    :host([layout="1-column"]) {
        --heading-font-size: ${p.cSu};
        --heading-line-height: ${p.RUt};
    }

    .activeIndicator {
        grid-row: 2;
        grid-column: 1;
        width: 20px;
        height: 3px;
        border-radius: calc(${p.UWU} * 1px);
        justify-self: center;
        background: ${p.Avx};
    }

    .activeIndicatorTransition {
        transition: transform 0.2s ease-in-out;
    }

    .tabpanel {
        grid-row: 1/3;
        grid-column-start: 1;
        grid-column-end: 4;
        position: relative;
    }
`.withBehaviors(new L.O(B,z),(0,S.Uu)(A.i`
            ::slotted([slot="previous-flipper"]),
            .previous-flipper:not(.windows),
            ::slotted([slot="next-flipper"]),
            .next-flipper:not(.windows) {
                fill: ${p.jql};
                color: ${p.jql};
            }

            ::slotted([slot="previous-flipper"])::before,
            .previous-flipper:not(.windows)::before,
            ::slotted([slot="next-flipper"])::before,
            .next-flipper:not(.windows)::before {
                background: ${p.CHi};
            }

            ::slotted([slot="previous-flipper"]:hover)::before,
            .previous-flipper:hover::before,
            ::slotted([slot="next-flipper"]:hover)::before,
            .next-flipper:hover::before {
                background: ${p.CHi};
            }

            .previous-flipper.windows,
            .next-flipper.windows {
                fill: ${p.CHi};
                background: ${M.A4}
            }

        `),(0,S.vF)(A.i`
            .activeIndicator {
                forced-color-adjust: none;
                background: ${F.H.Highlight};
            }

            .previous-flipper.windows,
            .next-flipper.windows {
                background: ${F.H.ButtonFace};
            }

            .previous-flipper.windows:hover,
            .next-flipper.windows:hover,
            .previous-flipper.windows:focus-visible,
            .next-flipper.windows:focus-visible {
                background: ${F.H.Highlight};
                fill: ${F.H.HighlightText}
            }
        `));var H=i(57905),O=i(43504);class D extends O.x{}var R=i(49944);const P=A.i`
    ${(0,T.j)("flex")} :host {
        box-sizing: border-box;
        font-family: ${p.SVJ};
        font-size: ${p.sNp};
        line-height: ${p.vgC};
        height: 100%;
    }
`,Z=D.compose({baseName:"info-pane-panel",template:R.o,styles:P});var V=i(26899);class U extends V.O{}var N=i(13626);const G=A.i`
    ${(0,T.j)("inline-flex")} :host {
        box-sizing: border-box;
        font-family: ${p.SVJ};
        min-height: 6px;
        min-width: 6px;
        background-color: ${p.CHi};
        border-radius: 20px;
        opacity: 0.4;
        grid-row: 1;
        z-index: 1;
        margin: 0px 2px;
    }

    :host([aria-selected="true"]) {
        z-index: 2;
        opacity: 1;
        min-width: 30px;
    }

    :host(:hover),
    :host(:active) {
        background: ${p.CHi};
        opacity: 1;
    }

    :host(:${I.b}) {
        outline: none;
        box-shadow: 0 0 0 calc((${p.vxp} - ${p.Han}) * 1px)
            rgba(0,0,0,1), 0 0 0 calc((${p.vxp} + ${p.Han}) * 1px)
            ${p.yGg};
    }

    :host(:focus) {
        outline: none;
    }
`.withBehaviors((0,S.vF)(A.i`
            :host {
                forced-color-adjust: none;
                border-color: transparent;
                color: ${F.H.ButtonText};
                fill: ${F.H.ButtonText};
            }
            :host(:hover),
            :host([aria-selected="true"]:hover) {
                background: ${F.H.Highlight};
                color: ${F.H.HighlightText};
                fill: ${F.H.HighlightText};
            }
            :host([aria-selected="true"]) {
                background: ${F.H.HighlightText};
                color: ${F.H.Highlight};
                fill: ${F.H.Highlight};
            }
            :host(:${I.b}) {
                border-color: ${F.H.ButtonText};
                box-shadow: none;
            }
        `)),W=U.compose({baseName:"info-pane-tab",template:N.O,styles:G});let q=class extends g{};q=(0,n.gn)([(0,r.M)({name:"msn-info-pane",template:$,styles:E})],q),H.K.getOrCreate().withShadowRootMode("open").withElementDisambiguation((()=>H.h.ignoreDuplicate)).withPrefix("msn").register(Z(),W())},53357:function(t,e,i){i.d(e,{W:function(){return A}});var a=i(33940),o=i(89346),n=i(12968),r=i(87697),s=i(65620),l=i(84708),d=i(11935),c=i(9538),p=i(25193),g=i(54433),h=i(90351),u=i(38856);class m{constructor(t,e,i,a,o){this.childElements=this.getChildren(t,!1),this.visibleChildElements=this.getChildren(t,!0),this.containerElement=this.getContainerElement(t),this.parentElement=this.getParentElement(t),this.maxCount=e?(0,l.Z)(e):-1,this.maxHeight=i?(0,l.Z)(i):0,this.originalHeight=a?(0,l.Z)(a):0,this.onDecorationLinesExpanded=o}run(t){(0,d.Z)(t,(t=>{t(this)}))}getChildren(t,e){const i=e?t.querySelectorAll('div[name="inline-wrapper"]:not(.hidden)>*'):t.querySelectorAll('div[name="inline-wrapper"]>*'),a=[];i.forEach((t=>{const e=(0,l.Z)(t.getAttribute("priority"));a.push({item:t,priority:e})}));const o=(0,c.Z)(a,["priority"]);return(0,p.Z)(o,(t=>t.item))}getParentElement(t){return t.querySelector(".group-wrapper")}getContainerElement(t){return t.querySelector(".group-container")}hideElement(t){t.parentElement.className="hidden"}hideChildElements(t){for(;this.visibleChildElements.length>t;){const t=this.visibleChildElements.pop();if(t){if(!((0,l.Z)(t.getAttribute("priority"))>0)){this.childElements.push(t);break}this.hideElement(t)}}}showChildElementByIndex(t){this.childElements[t]&&this.childElements[t].parentElement.classList.remove("hidden")}hideChildElementByIndex(t){this.childElements[t]&&this.childElements[t].parentElement.classList.add("hidden")}}const v=t=>{let e=t.parentElement.getBoundingClientRect().width;if(t.visibleChildElements.length>0){const i=(0,g.Z)(t.visibleChildElements,(t=>{const i=t.getBoundingClientRect();return e-=(0,h.Z)(i,"width",0),(0,l.Z)(e)<0}));if(i>-1){const e=t.visibleChildElements.length;t.hideChildElements(i),e>0&&(0,u.O)(t.containerElement,"inlineGroup",`w,${e},${t.visibleChildElements.length}`,0)}}},f=t=>{if(t.maxCount>=0){const e=t.visibleChildElements.length;t.hideChildElements(t.maxCount),e>0&&(0,u.O)(t.containerElement,"inlineGroup",`c,${e},${t.visibleChildElements.length}`,0)}},b=t=>{let e=t.parentElement.getBoundingClientRect().height;if(t.originalHeight&&t.containerElement.setAttribute("style",`height: ${t.originalHeight}px;`),t.childElements.length>0){if(e<=t.maxHeight){let i=0;for(;e<=t.maxHeight&&i<=t.childElements.length-1;)t.showChildElementByIndex(i++),e=t.parentElement.getBoundingClientRect().height}if(e>t.maxHeight){const i=t.childElements.length;let a=i,o=t.childElements.length-1;for(;e>t.maxHeight&&o>=0;)t.hideChildElementByIndex(o--),a-=1,e=t.parentElement.getBoundingClientRect().height;i>0&&(0,u.O)(t.containerElement,"inlineGroup",`h,${i},${a}`,0)}}t.originalHeight&&t.originalHeight!==x(e)&&t.containerElement.setAttribute("style",`height: ${x(e)}px; transition: height 0.3s;`),t.onDecorationLinesExpanded&&y(e)&&t.onDecorationLinesExpanded(!0)},x=t=>t<25?25:t,y=t=>Math.ceil(t/25)>1;class C extends o.H{constructor(){super(...arguments),this.verticalMode=!1,this.onUpdate=()=>{((t,e,i,a,o,n)=>{const r=new m(t,e,a,o,n),s=[];i?s.push(b):(s.push(f),s.push(v)),r.run(s)})(this.shadowRoot,this.maxCount,this.verticalMode,this.maxHeight,this.originalHeight,this.onDecorationLinesExpanded)}}connectedCallback(){super.connectedCallback(),n.SO.queueUpdate(this.onUpdate)}}(0,a.gn)([r.LO],C.prototype,"childElements",void 0),(0,a.gn)([s.Lj],C.prototype,"maxCount",void 0),(0,a.gn)([(0,s.Lj)({mode:"boolean"})],C.prototype,"verticalMode",void 0),(0,a.gn)([s.Lj],C.prototype,"originalHeight",void 0),(0,a.gn)([s.Lj],C.prototype,"maxHeight",void 0),(0,a.gn)([s.Lj],C.prototype,"onDecorationLinesExpanded",void 0);var w=i(39181),$=i(81422),k=i(58689),L=i(58952),T=i(18864);const S=w.d`
    <template
        ${(0,$.p)({property:"childElements",filter:(0,k.R)()})}
    >
        <div class="group-container" ${(0,L.i)("groupContainer")} part="group-container">
            <div class="group-wrapper" part="group-wrapper">
                ${(0,T.rx)((t=>t.childElements),w.d`
                    <div name="inline-wrapper">
                        ${t=>w.d`${t.outerHTML}`}
                    </div>
                `)}
            </div>
        </div>
    </template>
`;const F=i(53046).i`

    div[name="inline-wrapper"] {
        display: inline;
        white-space: normal;
    }

    .group-container .group-wrapper div[name="inline-wrapper"].hidden {
        display: none;
    }

    :host(:not(:defined)) {
        display: none;
    }
`;let A=class extends C{};A=(0,a.gn)([(0,o.M)({name:"msn-inline-group",template:S,styles:F})],A)},85611:function(t,e,i){i.d(e,{w:function(){return x}});var a=i(14609),o=i(33940),n=i(89346),r=i(87697);class s extends n.H{}(0,o.gn)([r.LO],s.prototype,"nativeAdArticleData",void 0);var l=i(39181),d=i(18864),c=i(53212),p=i(25295);const g=l.d`
    ${(0,d.rx)((t=>[t.nativeAdArticleData]),l.d`
        <msft-article-card
            size="${t=>t.cardSize}"
            card-fill-color=${t=>t.adBackgroundColor}
        >
            <msft-article
                id="native_ad_${t=>t.id}"
                href=${t=>t.destinationUrl}
                target="_blank"
                title=${t=>t.title}
                ?image-priority=${t=>t.imagePriority}
                class="${t=>t.getArticleCardClassnames(t)}"
                data-t="${t=>{var e,i;return null===(i=null===(e=t.adTelemetryContext)||void 0===e?void 0:e.nativeAdCard)||void 0===i?void 0:i.getMetadataTag()}}"
                :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
                ${(0,c.lq)()}
            >
                ${t=>t.createNativeAdFaviconWithProviderName}
                ${t=>t.renderTitle()}
                ${t=>t.videoProps?t.renderVideo("image",p.B._300x169,!0):t.renderImage("image",p.B._300x225)}
                ${t=>t.invertSlugPosition?t.renderStartSection("start-action",t.destinationUrl):t.renderStartSection("attribution",t.destinationUrl)}
                ${t=>t.renderEndSection("end-action")}
            </msft-article>
        </msft-article-card>
    `)}
`;var h=i(53046),u=i(67620),m=i(99753),v=i(24877);const f=h.i`
    msft-article-card {
        height: 100%;
        width: 100%;
    }

    msft-ad-label {
        margin-inline-end: 8px;
    }

    msft-article.native-ad {
        --article-native-ad-heading-margin-bottom: 40px;
        --heading-max-lines: 3;
    }

    msft-article.nativeAdVideo-river::part(image) {
        z-index: 2;
    }

    msft-article.native-ad.gradient {
        --article-native-ad-actions-height: 33px;
        --article-native-ad-heading-margin-bottom: 6px;
    }

    msft-article.native-ad::part(heading) {
        margin-bottom: var(--article-native-ad-heading-margin-bottom);
        color: var(--msft-card-font-color);
    }

    msft-article.native-ad.long-gradient::part(gradient) {
        top: -55px;
    }

    msft-attribution {
        max-width: 100%;
    }

    msft-article.native-ad::part(actions) {
        height: var(--article-native-ad-actions-height);
        align-items: center;
    }

    msft-article-card[size="_1x_2y"] msft-article.native-ad[class*="zoom-ratio"]:not(.no-image)::part(gradient):after {
        content: "";
        height: 10px;
        width: 100%;
        bottom: -5px;
        position: absolute;
        background: var(--gradient-mid-color);
    }

    /** 
     * TODO Cleanup these two styles after the Linear feed right rail transparent-background ad flight is completed 
     * Or clean this up once this the right rail native ads card gets migrated to the NativeAdWC experience
     * Work item tracking the migration - https://msasg.visualstudio.com/Bing_Ads/_workitems/edit/3905327
    **/
    @media (prefers-color-scheme: light) {
        .white-gradient::part(article) {
            background: #f7f7f7;
            --gradient-mid-color: #f7f7f7;
            --gradient-color: #f7f7f7;
            --msft-card-font-color: black;
        }
    }
    @media (prefers-color-scheme: dark) {
        .white-gradient::part(article) {
            background: #242424;
            --gradient-mid-color: #242424;
            --gradient-color: #242424;
            --msft-card-font-color: white;
        }
    }

    /** 
     * Below styles migrate ftom ArticleCardTemplate.ts
    **/
    msft-article span.title_1x_2y,
    msft-article span.title_2x_2y {
        font-size: 20px;
    }

    msft-article.long-gradient::part(gradient) {
        top: -55px;
    }

    msft-article-card[size="_1x_2y"] msft-article[class*="zoom-ratio"]:not(.no-image)::part(gradient):after {
        content: "";
        height: 10px;
        width: 100%;
        bottom: -5px;
        position: absolute;
        background: var(--gradient-mid-color);
    }

    msft-attribution {
        position: relative;
        overflow: hidden;
    }

    ${v.T.getArticleCardHoverGradientStyle()}

`.withBehaviors(new u.j(["nativeAdArticleData"],(t=>{if(!t||!t.nativeAdArticleData)return h.i``;const e=t.nativeAdArticleData;let i="";return(e.isAdSlugV4NonDr||e.isTransparentAdSlugWithBorderV2NonDr)&&(i+="msft-article.native-ad::part(heading) {\n                    --heading-max-lines: 2;\n                }"),e.layoutGap&&(i+=`msft-article-card[size="_1x_2y"] msft-article::part(gradient) {\n                    bottom: ${67+e.layoutGap}px;\n                }\n            \n                msft-article-card[size="_2x_2y"] msft-article::part(gradient) {\n                    bottom: 0px;\n                }`),e.useTitleFontSize&&(i+=`msft-article-card msft-article.native-ad {\n                    --msft-article-heading-font-size: ${e.useTitleFontSize}px;\n                    --msft-article-heading-line-height: 24px;\n                }\n            \n                msft-article-card msft-article.native-ad::part(attribution) {\n                    height: 28px;\n                }\n            \n                msft-article-card[size="_1x_2y"] msft-article.native-ad:not(.no-image)::part(heading) {\n                    margin-bottom: 11px;\n                }\n            \n                msft-article-card[size="_1x_2y"] msft-article.native-ad:not(.no-image)::part(gradient) {\n                    background: linear-gradient(180deg, transparent 0%, var(--gradient-mid-color) 46%, var(--gradient-color) 100%);\n                    top: 5px;\n                }`),e.alignFooters&&(i+=`msft-article-card msft-article::part(heading):after {\n                    top: calc(100% - ${e.fixedCardHeight?304:292+(e.layoutGap||12)}px - 8px) !important;\n                }\n        \n                msft-article::part(text) {\n                    margin-bottom: -8px;\n                }\n\n        \n                msft-article-card[size="_1x_2y"] msft-article:not(.no-image)::part(gradient) {\n                    top: -29px;\n                    bottom: calc(${e.fixedCardHeight?79:67+(e.layoutGap||12)}px + 8px);\n                }\n        \n                msft-article.no-image::part(actions) {\n                    bottom: calc(var(--msft-article-padding) * 1px - 8px);\n                }`),e.region===m.yp.rightRail&&e.renderFlattenedDesign&&(i+="msft-article-card {\n                    box-shadow: none;\n                }"),"Bierstadt"===e.fontFamilyOnCardContent&&(i+='msft-article-card msft-article::part(heading) {\n                    font-family: Bierstadt, Segoe UI, Segoe UI Midlevel, Arial, Sans-Serif;\n                    --msft-article-heading-line-height: 24px;\n                    --heading-max-lines: 3;\n                }\n        \n                msft-article-card msft-article p[slot="abstract"] {\n                    font-family: Bierstadt, Segoe UI, Segoe UI Midlevel, Arial, Sans-Serif;\n                    --abstract-font-size: 15px;\n                }\n        \n                msft-article-card msft-article msft-attribution::part(content) {\n                    font-family: Bierstadt, Segoe UI, Segoe UI Midlevel, Arial, Sans-Serif;\n                    font-size: calc(var(--type-ramp-minus-1-font-size) + 1px);\n                }'),"Grandview"===e.fontFamilyOnCardContent&&(i+='msft-article-card msft-article::part(heading) {\n                    font-family: Grandview, Segoe UI, Segoe UI Midlevel, Arial, Sans-Serif;\n                    --msft-article-heading-line-height: 24px;\n                    --heading-max-lines: 3;\n                }\n        \n                msft-article-card msft-article p[slot="abstract"] {\n                    font-family: Grandview, Segoe UI, Segoe UI Midlevel, Arial, Sans-Serif;\n                }\n        \n                msft-article-card msft-article msft-attribution::part(content) {\n                    font-family: Grandview, Segoe UI, Segoe UI Midlevel, Arial, Sans-Serif;\n                }'),"Seaford"===e.fontFamilyOnCardContent&&(i+='msft-article-card msft-article::part(heading) {\n                    font-family: Seaford, Segoe UI, Segoe UI Midlevel, Arial, Sans-Serif;\n                    --msft-article-heading-line-height: 24px;\n                    --heading-max-lines: 3;\n                }\n        \n                msft-article-card msft-article p[slot="abstract"] {\n                    font-family: Seaford, Segoe UI, Segoe UI Midlevel, Arial, Sans-Serif;\n                    --abstract-font-size: 15px;\n                }\n        \n                msft-article-card msft-article msft-attribution::part(content) {\n                    font-family: Seaford, Segoe UI, Segoe UI Midlevel, Arial, Sans-Serif;\n                    font-size: calc(var(--type-ramp-minus-1-font-size) + 1px);\n                }'),"Tenorite"===e.fontFamilyOnCardContent&&(i+='msft-article-card msft-article::part(heading) {\n                    font-family: Tenorite, Segoe UI, Segoe UI Midlevel, Arial, Sans-Serif;\n                    --msft-article-heading-line-height: 24px;\n                    --heading-max-lines: 3;\n                }\n        \n                msft-article-card msft-article p[slot="abstract"] {\n                    font-family: Tenorite, Segoe UI, Segoe UI Midlevel, Arial, Sans-Serif;\n                    --abstract-font-size: 16px;\n                }\n        \n                msft-article-card msft-article msft-attribution::part(content) {\n                    font-family: Tenorite, Segoe UI, Segoe UI Midlevel, Arial, Sans-Serif;\n                    font-size: calc(var(--type-ramp-minus-1-font-size) + 2px);\n                }'),h.i`
                :host {
                    grid-area:${e.grid_area};
                }

                msft-article-card msft-article::part(heading):after {
                    top: calc(100% - ${e.fixedCardHeight?304:292+(e.layoutGap||12)}px);
                }

                msft-article-card[size="_1x_2y"] msft-article:not(.no-image)::part(gradient) {
                    bottom: ${e.fixedCardHeight?77:65+(e.layoutGap||12)}px;
                }
                ${i}
            `})));class b extends s{}const x=(0,a.Z)((()=>{(0,n.M)({name:"msn-native-ad-article-card",template:g,styles:f})(b)}))},18179:function(t,e,i){i.d(e,{J0:function(){return a},Vy:function(){return o}});const a=t=>t.hoverState&&!t.hoverState.isHovered&&t.hoverState.isDecorationLinesExpanded?65:25,o=(t,e)=>{t.hoverState&&t.hoverState.isDecorationLinesExpanded!==e&&(t.hoverState.isDecorationLinesExpanded=e)}},792:function(t,e,i){i.d(e,{E2:function(){return w},E8:function(){return k},GZ:function(){return h},Lp:function(){return f},Ns:function(){return m},RV:function(){return y},eC:function(){return C},gx:function(){return u},pi:function(){return $},sV:function(){return x},zB:function(){return b}});var a=i(18179),o=i(29666),n=i(88875),r=i(13578),s=i(4935);const{RiverAnimatedImagery_9by16:l,RiverZIndex_9by16:d,RiverZIndex_3by4:c,ZIndex:p}=o.SI;var g;!function(t){t.LTR="leftToRight",t.RTL="rightToLeft"}(g||(g={}));const h=t=>{var e,i;if(t.hasAnyInlineDecoration)switch(null===(e=t.template)||void 0===e?void 0:e.templateType){case l:case c:case d:return"five-lines-heading";default:return"two-lines-heading"}else switch(null===(i=t.template)||void 0===i?void 0:i.templateType){case l:case c:case d:return"eight-lines-heading";default:return"three-lines-heading"}},u=(t,e)=>{var i;if([c,d,l].includes(null===(i=e.template)||void 0===i?void 0:i.templateType)){if("rtl"===t)return g.RTL;if("ltr"===t)return g.LTR}return""},m=t=>e=>{var i,o,n;const r=null===(i=null==e?void 0:e.hoverState)||void 0===i?void 0:i.isHovered,s=null===(o=null==e?void 0:e.template)||void 0===o?void 0:o.progressiveDisplay,p="call-to-action";switch(null===(n=e.template)||void 0===n?void 0:n.templateType){case l:case c:case d:return t(p,!1,s,65,r,!0,0,(t=>(0,a.Vy)(e,t)));default:return t(p,!1,s,r?65:25,r,!1,(0,a.J0)(e),(t=>(0,a.Vy)(e,t)))}};var v;!function(t){t.ImageAtTop="imageAtTop",t.ImageAtBottom="imageAtBottom",t.AnimatedImagery9by16="animatedImagery9by16",t.ImageAtRight9By16="imageAtRight9By16",t.ImageAtRight3By4="imageAtRight3By4"}(v||(v={}));const f=t=>{switch(t.template.templateType){case l:return v.AnimatedImagery9by16;case d:return v.ImageAtRight9By16;case c:return v.ImageAtRight3By4;case p:return t.template.flipZIndex?v.ImageAtTop:v.ImageAtBottom}},b=t=>{var e;return(null===(e=t.template)||void 0===e?void 0:e.templateType)||o.SI.Default},x=t=>{const{SpecialOfferNonDR:e,SpecialOfferNonDRWithExp:i,ComboSpecialOfferNonDR:a}=o.SI;return[e,i,a].includes(b(t))},y=t=>{const{SpecialOfferNonDRWithExp:e}=o.SI;return e===b(t)},C=t=>[o.SI.CallToActionV3,o.SI.CallToActionV3PA].includes(b(t)),w=t=>Boolean(b(t)===o.SI.ComboSaleHighlightNonDR),$=t=>{var e,i,a;t.disableRenderDecoration&&b(t)==o.SI.Default&&(t=>{if(t.assets&&!(0,r.Z)(t.assets)){const e=(0,s.Z)(t.assets,((t,e,i)=>(n.fs.includes(n.aT[i])&&(t[i]=e),t)),{});t.assets=e}})(t);const l=null===(e=t.template)||void 0===e?void 0:e.immersiveThemeColor,d=t.badge,c=t.videoProps,p=!!t.assets&&!(0,r.Z)(t.assets),g=(null===(i=t.template)||void 0===i?void 0:i.animatedImage)&&(null===(a=t.template)||void 0===a?void 0:a.animatedConfig),h=[o.SI.PseudoVideo,o.SI.Slideshow,o.SI.PatternOverlay,o.SI.AdCarousel,o.SI.ZIndex,o.SI.RiverAnimatedImagery_9by16,o.SI.RiverZIndex_9by16,o.SI.RiverZIndex_3by4,o.SI.CallToActionV3].includes(b(t));return!!(t.isTransparentAdSlugWithBorder||t.enableAdsColorBleed||t.isTransparentAdSlugWithBorderV2)||!c&&!!(d||p||g||h||l)},k=t=>{const e=!!t.assets&&!(0,r.Z)(t.assets),i=[o.SI.SpecialOfferNonDR,o.SI.SpecialOfferNonDRWithExp,o.SI.RatingHighlightRedNonDR,o.SI.RatingHighlightYellowNonDR,o.SI.RatingDefaultYellowNonDRStatic,o.SI.RatingHighlightYellowNonDRStatic,o.SI.FreeShippingPlainTextNonDR,o.SI.FreeShippingInlineNonDR,o.SI.FreeShippingTopLeftNonDR,o.SI.FreeShippingTopRightNonDR,o.SI.ConditionNonDR,o.SI.ReturnPolicyNonDR,o.SI.SoldNonDR,o.SI.ComboFreeShippingNonDR,o.SI.ComboRatingNonDR,o.SI.ComboSpecialOfferNonDR,o.SI.ComboSoldNonDR,o.SI.ComboReturnPolicyNonDR,o.SI.ComboConditionNonDR].includes(b(t));return!(e||!i)}},41678:function(t,e,i){i.d(e,{h:function(){return m}});var a=i(14609),o=i(33940),n=i(89346),r=i(87697);class s extends n.H{}(0,o.gn)([r.LO],s.prototype,"nativeAdHpStripeData",void 0);var l=i(39181),d=i(18864),c=i(53212),p=i(25295);const g=l.d`
    ${(0,d.rx)((t=>[t.nativeAdHpStripeData]),l.d`
        <msft-content-card
            href=${t=>t.destinationUrl}
            target="_blank"
            title=${t=>t.title}
            ?image-priority=${t=>t.imagePriority}
            data-t="${t=>{var e,i;return null===(i=null===(e=t.adTelemetryContext)||void 0===e?void 0:e.nativeAdCard)||void 0===i?void 0:i.getMetadataTag()}}"
            :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            ${(0,c.lq)()}
        >
            ${t=>t.title}
            ${t=>t.renderImageTag("media",p.B._300x200)}
            <msft-attribution slot="start-actions">
                ${t=>t.providerData.name}
            </msft-attribution>
            <div slot="end-actions"></div>
        </msft-content-card>
    `)}
`;const h=i(53046).i`
    msft-content-card {
        --heading-max-lines: 3;
    }

    msft-content-card msft-attribution {
        margin-inline-start: -13px;
    }

    msft-content-card img[slot="media"] {
        width: 306px;
        height: 200px;
        object-fit: cover;
    }
`;class u extends s{}const m=(0,a.Z)((()=>{(0,n.M)({name:"msn-native-ad-hp-stripe-card",template:g,styles:h})(u)}))},2438:function(t,e,i){i.d(e,{f3:function(){return Y}});var a=i(14609),o=i(33940),n=i(89346),r=i(87697);class s extends n.H{}(0,o.gn)([r.LO],s.prototype,"data",void 0);var l=i(39181),d=i(18864),c=i(792),p=i(13578),g=i(13988),h=i(90351),u=i(19628),m=i(53212);const v=l.d`
    <style>
        :host {
            grid-area:${t=>t.grid_area};
        }
        .card-button {
            border-radius: 100%;
        }
    </style>
    <fluent-card
        id="native_ad_${t=>t.id}"
        style="grid-area:${t=>t.grid_area};height: ${t=>t.ContentCardImageSizes._300x304.height}px;"
        class="${t=>t.cardSize}"
    >
        <msn-pattern-overlay-card
            href=${t=>t.destinationUrl}
            target="_blank"
            title=${t=>t.title}
            data-t="${t=>{var e,i;return null===(i=null===(e=t.adTelemetryContext)||void 0===e?void 0:e.nativeAdCard)||void 0===i?void 0:i.getMetadataTag()}}"
            :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            ${(0,m.lq)()}
            layout=${t=>(0,h.Z)(t,"template.landscapeOverlay",!1)?"landscape":"default"}
            shopNowText=${t=>(0,h.Z)(t.localizedStrings,"nativeAdShopNowText")}
            price=${t=>(0,h.Z)(t,"assets.salePrice")||(0,h.Z)(t,"assets.price")}
        >
            ${l.d`<span>${t=>t.title}</span>`}
            ${t=>(0,h.Z)(t,"template.landscapeOverlay",!1)?t.renderImage("media",t.ContentCardImageSizes._300x174,t.ContentCardImageSizes._300x174):t.renderImage("media",t.ContentCardImageSizes._300x225,t.ContentCardImageSizes._300x225)}
            ${l.d`
    ${(0,g.g)((t=>t.template.landscapeOverlay),l.d`
        <msft-attribution slot="${t=>t.hasAnyInlineDecoration?"call-to-action-two-lines":"call-to-action-one-line"}">
            <!-- price, when salePrice is present, use salePrice as the actual price -->
            ${(0,g.g)((t=>(0,h.Z)(t,"assets.salePrice")||(0,h.Z)(t,"assets.price")),l.d`
                <decoration-price data=${t=>t.assets.salePrice||t.assets.price} largeFont="false"></decoration-price>
            `)}
            ${(0,g.g)((t=>t.hasAnyInlineDecoration),l.d`
                <div>
                    ${t=>(t=>(0,h.Z)(t,"assets.installmentPrice")&&(0,h.Z)(t,"assets.price")?l.d`
            <decoration-installment-price
                data="${t=>t.assets.installmentPrice}"
                price-format-now="${t=>(0,h.Z)(t.localizedStrings,"nativeAdInstallmentPriceFormatNow")}"
                price-format-plan="${t=>(0,h.Z)(t.localizedStrings,"nativeAdInstallmentPriceFormatPlan")}"
            ></decoration-installment-price>
        `:(0,h.Z)(t,"assets.rating")?l.d`<decoration-rating rating="${t.assets.rating}" count="${t.assets.likes}" />`:(0,h.Z)(t,"assets.curbsidePickup")?l.d`<decoration-curbside-pickup data="${t.localizedStrings.nativeAdCurbsidePickupText}" />`:(0,h.Z)(t,"assets.freeShipping")?l.d`<decoration-free-shipping data="${t.localizedStrings.nativeAdFreeShippingText}" />`:(0,h.Z)(t,"assets.salePrice")&&(0,h.Z)(t,"assets.price")?l.d`
            <div>
                <div style="display: inline-block;"><decoration-price-strike-through data="${t.assets.price}"/></div>
                <div style="display: inline-block;"><decoration-price-off data=" &bull; ${u.Ld.Format(t.localizedStrings.nativeAdOnSaleText,t.assets.discount)}" /></div>
            </div>
        `:l.d`<div />`)(t)}
                </div>
            `)}
        </msft-attribution>
    `)}
    ${(0,g.g)((t=>!t.template.landscapeOverlay),l.d`
        <!-- when it's not landscape layout, only show price on left bottom if price or sale price is available, otherwise show "Shop now" -->
        <msft-attribution slot="call-to-action-two-lines">
            <decoration-price data=${t=>(0,h.Z)(t,"assets.salePrice")||(0,h.Z)(t,"assets.price")||t.localizedStrings.nativeAdShopNowText} largeFont="false"/>
        </msft-attribution>
    `)}
`}
            ${t=>t.renderStartSection("start-actions",t.destinationUrl)}
            ${t=>t.renderEndSection("end-actions")}
        </msn-pattern-overlay-card>
    </fluent-card>
`;var f=i(19636),b=i(28258),x=i(17579),y=i(29666);const C=252;function w(t){var e;const i=Number(t.template&&t.template.desiredWidth||t.imageData.imageWidth),a=Number(t.template&&t.template.desiredHeight||t.imageData.imageHeight),o=Math.floor(142*i/a),n=Math.floor(a*C/i);if(t.template&&t.template.templateType===y.SI.RiverZIndex_9by16)return{w:113,h:202};if(t.template&&t.template.templateType===y.SI.RiverZIndex_3by4)return{w:113,h:150};if((null===(e=t.template)||void 0===e?void 0:e.templateType)===y.SI.RiverAnimatedImagery_9by16)return{w:141,h:250};if(t.template&&t.template.desiredRatio){if(t.template.desiredRatio===y.hb._191by1)return{w:C,h:n};if(t.template.desiredRatio===y.hb._1by1||t.template.desiredRatio===y.hb._4by3||t.template.desiredRatio===y.hb._16by9)return{w:o,h:142}}return o>C?{w:C,h:n}:{w:o,h:142}}var $=i(35099);$.Ii,$.pB,b.MsnZIndexCard;const k=l.d`
    <div slot="image-with-badge">
        <img
            src="${t=>t.imageData.source}"
            alt="${t=>t.imageData.altText}"
            style="
                background: white;
                border-top-right-radius: ${t=>{var e;return(null===(e=t.template)||void 0===e?void 0:e.templateType)===y.SI.RiverAnimatedImagery_9by16?"calc(var(--layer-corner-radius) * 1px)":"unset"}};
                border: ${t=>{var e;return(null===(e=t.template)||void 0===e?void 0:e.templateType)===y.SI.RiverAnimatedImagery_9by16?"unset":"10px solid #FFFFFF"}};
                filter: ${t=>{var e;return(null===(e=t.template)||void 0===e?void 0:e.templateType)===y.SI.RiverAnimatedImagery_9by16?"unset":"drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25))"}};
                width: ${t=>w(t).w}px;
                min-width: ${t=>w(t).w}px;
                height: ${t=>w(t).h}px;
                min-height: ${t=>w(t).h}px;
                object-fit: cover;
            "
        />
    </div>
`,L=l.d`
    <fluent-card
        id="native_ad_${t=>t.id}"
        style="
            background: unset;
            border-radius: unset;
            box-shadow: unset;
            grid-area:${t=>t.grid_area};
            height: ${t=>t.ContentCardImageSizes._300x304.height+16}px;
            left: -8px;
            position: relative;
            top: -8px;
            width: ${t=>t.ContentCardImageSizes._300x304.width+16}px;
        "
        class="${t=>t.cardSize}"
    >
        <msn-z-index-card
            href=${t=>t.destinationUrl}
            target="_blank"
            title=${t=>t.title}
            ?image-priority=${t=>t.imagePriority}
            layout=${t=>(0,c.Lp)(t)}
            heading-max-lines=${t=>(0,c.GZ)(t)}
            document-direction=${t=>(0,c.gx)(document.dir,t)} 
            data-t="${t=>{var e,i;return null===(i=null===(e=t.adTelemetryContext)||void 0===e?void 0:e.nativeAdCard)||void 0===i?void 0:i.getMetadataTag()}}"
            :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            ${(0,m.lq)()}
        >
            ${t=>t.renderTitle()}
            <!--
                For now z-index only supports 1x_2y and with image data, here the assumption is that's the only configuration will be sent to z-index.
            -->
            <div slot="media">
                <style>
                    :host {
                        --z-index-image-width: ${t=>w(t).w}px;
                        --z-index-image-height: ${t=>w(t).h}px;
                        --heading-max-lines: ${t=>t.hasAnyInlineDecoration?2:3};
                    }
                </style>
                ${(0,g.g)((t=>t.badge),l.d`
                    <msn-z-index-image-badge-decorator
                        badgeType=${t=>t.badge.type}
                        text=${t=>t.badge.text}
                        layout=${t=>(0,c.Lp)(t)}
                    >
                        <div slot="image-with-badge" part="image-with-badge">
                            ${k}
                        </div>
                    </msn-z-index-top-image-badge-decorator>
                `)}
                ${(0,g.g)((t=>!t.badge),l.d`
                    ${k}
                `)}
            </div>
            ${t=>(0,c.Ns)(x.o)(t)}
            ${t=>t.renderStartSection("start-actions",t.destinationUrl)}
            ${t=>t.renderEndSection("end-actions")}
        </msn-z-index-card>
    </fluent-card>
`,T=l.d`
    <msn-ad-carousel-slide>
        <img slot="carousel-slide-content" class="carousel-item" src= ${t=>t.imageUrl} />
    </msn-ad-carousel-slide>
`,S=l.d`
    .carousel-item {
        width: 100%;
        height: 100%;
        object-fit: cover; 
    }
    :host {
        border-radius: unset;
        box-shadow: unset;
        grid-area:${t=>t.grid_area};
        height: ${t=>t.ContentCardImageSizes._300x304.height+4}px;
        position: relative;
        width: ${t=>t.ContentCardImageSizes._300x304.width+4}px
    }
`,F=l.d`
    <style>
        ${S}
    </style>
    <fluent-card 
        id="native_ad_${t=>t.id}"
        style="
            border-radius: unset;
            box-shadow: unset;
            grid-area:${t=>t.grid_area};
            height: ${t=>t.ContentCardImageSizes._300x304.height+4}px;
            position: relative;
            width: ${t=>t.ContentCardImageSizes._300x304.width+4}px
        "
        class="${t=>t.cardSize}"
    >
        <msn-ad-carousel-card
            href=${t=>t.destinationUrl}
            target="_blank"
            title=${t=>t.title}
            ?image-priority=${t=>t.imagePriority}
            data-t="${t=>{var e,i;return null===(i=null===(e=t.adTelemetryContext)||void 0===e?void 0:e.nativeAdCard)||void 0===i?void 0:i.getMetadataTag()}}"
            :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            ${(0,m.lq)()}
        >
            ${t=>t.renderTitle()}
            ${A="media",l.d`
    <div slot="${A}" style="width: 300px;height: 180px;">
        <msn-ad-carousel 
            cardId=${t=>t.id} 
            visibleSlideCount = "3" 
            :updateActiveIndex=${t=>t.activeItemChangedHandler}
        >
            ${(0,d.rx)((t=>t.carouselData),T)}
        </msn-ad-carousel>
    </div>
`}
            ${t=>t.renderStartSection("start-actions",t.destinationUrl)}
            ${t=>t.renderEndSection("end-actions")}
        </msn-ad-carousel-card>
    </fluent-card>
`;var A;const I=(t={})=>l.d`
    <style>
        msn-animation-decorator img.crop {
            position: relative;
            left: -44px;
        }
    </style>
    <msn-animation-decorator
        effectId=${t=>t.id}
        showMultiTimes
        animationType=${t=>{var e;return null===(e=t.template)||void 0===e?void 0:e.animatedImage}}
        :animationConfig=${t=>{var e;return null===(e=t.template)||void 0===e?void 0:e.animatedConfig}}
        intersectionRootMargin="-160px 0px 0px 0px"
    >
        ${e=>e.renderImageTag("anim-content",t)}
    </msn-animation-decorator>
`,M=l.d`
    <style>
        :host {
            height: ${t=>t.ContentCardImageSizes._300x304.height}px;
            grid-area: ${t=>t.grid_area};
        }
        .card-button:not(:hover) {
            background: transparent;
        }
        msft-content-card fluent-button::part(control) {
            padding: 0;
        }
        msft-content-card.nativeAdVideo-river::part(media) {
            z-index: 2;
        }
        msft-content-card::part(footer) {
            padding: 0 16px 4px;
            margin-bottom: 0;
            height: 40px;
        }
        msft-content-card.wideIconMargin msft-ad-label {
            margin-right: 8px;
        }
        msft-attribution {
            position: relative;
            overflow: hidden;
        }
        /* override default call-to-action style from msft-content-card */
        msft-attribution.native-ad-river-card {
            z-index: unset;
            bottom: 42px;
            position: absolute;
        }
        msft-content-card span.title_1x_2y,
        msft-content-card span.title_1x_3y {
            font-size: 20px;
        }
        msft-content-card.native-ad-content-card::part(heading-container) {
            background: var(--fill-color);
        }
        msft-content-card.native-ad-content-card::part(media-wrapper) {
            height: 156px;
            transition: height  0.3s;
            overflow: hidden;
        }
        msft-content-card.two-lines-heading::part(heading) {
            --heading-max-lines: 2;
        }
    </style>
    <fluent-card
        id="native_ad_${t=>t.id}"
        style="grid-area:${t=>t.grid_area}"
        class="${t=>t.cardSize}"
    >
        <msft-content-card
            href=${t=>t.destinationUrl}
            target="_blank"
            title=${t=>t.title}
            ?image-priority=${t=>t.imagePriority}
            class="two-lines-heading ${t=>t.getContentCardClassnames(t)}"
            data-t="${t=>t.adTelemetryContext.nativeAdCard.getMetadataTag()}"
            :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            ${(0,m.lq)()}
        >
            ${t=>t.renderTitle()}
            ${t=>t.videoProps?t.renderVideo("media",t.ContentCardImageSizes._300x156):((t,e,i={})=>l.d`
    <!--
        Only use placeholder when the card size is 1x_2y
    -->
    ${(0,g.g)((t=>t.cardSize===t.FeedLayoutCardSize._1x_2y&&t.imageData),l.d`
        <div slot="${t}" style="width: ${e.width}px;height: ${e.height}px;">
            ${I(i)}
        <div>
    `)}
    ${(0,g.g)((t=>t.cardSize===t.FeedLayoutCardSize._1x_2y&&!t.imageData),l.d`
        <div slot="${t}" style="width: ${e.width}px;height: ${e.height}px;"></div>
    `)}
    ${(0,g.g)((t=>t.cardSize!==t.FeedLayoutCardSize._1x_2y&&t.imageData),l.d`
        <div slot="${t}">
            ${I(i)}
        </div>
    `)}
`)("media",t.ContentCardImageSizes._300x156)}
            ${t=>t.renderStartSection(t.isProviderInHeader?"attribution":"start-actions",t.destinationUrl)}
            ${t=>t.renderEndSection("end-actions")}
        </msft-content-card>
    </fluent-card>
`,_=l.d`
    <style>
        :host {
            grid-area:${t=>t.grid_area};
        }
    </style>
    <fluent-card
        id="native_ad_${t=>t.id}"
        style="
            height: ${t=>t.ContentCardImageSizes._300x304.height}px;
        "
        class="${t=>t.cardSize}"
    >
        <msn-slideshow
            :images="${t=>t.images}"
            :imageData="${t=>t.imageData}"
            :autoScroll="${t=>t.slideshowProps.autoScroll}"
            :autoScrollIntervalMs="${t=>t.slideshowProps.autoScrollIntervalMs}"
            :enableMediaControls="${t=>t.slideshowProps.enableSlideshowMediaControls}"
            :destinationUrl=${t=>t.destinationUrl}
            :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            :badge=${t=>t.badge}
            data-t="${t=>{var e,i;return null===(i=null===(e=t.adTelemetryContext)||void 0===e?void 0:e.nativeAdCard)||void 0===i?void 0:i.getMetadataTag()}}"
            ${(0,m.lq)(!0,!0,!0)}
            title=${t=>t.title}
        >
            ${t=>t.renderTitle()}
            ${t=>t.renderStartSection("start-actions",t.destinationUrl)}
            ${t=>t.renderEndSection("end-actions")}
        </msn-slideshow>
    </fluent-card>
`,{Default:j,ZIndex:B,RiverAnimatedImagery_9by16:z,RiverZIndex_9by16:E,RiverZIndex_3by4:H,PatternOverlay:O,AdCarousel:D,Slideshow:R,PseudoVideo:P,CallToActionV3:Z}=y.SI,V=l.d`
    <template>
        <style>
            msft-content-card.native-ad-content-card:hover::part(media-wrapper) {
                transition: height  0.3s;
                overflow: hidden;
                height: ${t=>{var e;return(null===(e=t.data.hoverState)||void 0===e?void 0:e.isDecorationLinesExpanded)?"116px":""}}
            }
        </style>
        ${(0,d.rx)((t=>[t.data]),l.d`
            ${t=>(t=>{var e,i,a;const o=(0,c.zB)(t)===B,n=(0,c.zB)(t)===z,r=(0,c.zB)(t)===E,s=(0,c.zB)(t)===H,l=(0,c.zB)(t)===R,d=(0,c.zB)(t)===P,g=(0,c.zB)(t)===O,h=(0,c.zB)(t)===D,u=!!t.assets&&!(0,p.Z)(t.assets),m=(0,c.zB)(t)===j&&(null===(e=t.template)||void 0===e?void 0:e.animatedImage)&&(null===(i=t.template)||void 0===i?void 0:i.animatedConfig),b=(0,c.zB)(t)===Z,x=null===(a=t.template)||void 0===a?void 0:a.immersiveThemeColor;return g?v:u||x||b?f.zG:o||n||r||s?L:h?F:m?M:l||d?_:void 0})(t)}
        `)}
    </template>
`;var U=i(26755),N=i(53046),G=i(17279);const W=N.i`
    msft-content-card fluent-button::part(control) {
        padding: 0;
    }
    msft-content-card.nativeAdVideo-river::part(media) {
        z-index: 2;
    }
    msft-content-card::part(footer) {
        padding: 0 16px 4px;
        margin-bottom: 0;
        height: 40px;
    }
    msft-content-card.wideIconMargin msft-ad-label {
        margin-inline-end: 8px;
    }
    msft-attribution {
        position: relative;
        overflow: hidden;
    }
    /* override default call-to-action style from msft-content-card */
    msft-attribution.native-ad-river-card {
        bottom: 42px;
        position: absolute;
        z-index: unset;
    }
    msft-content-card span.title_1x_2y,
    msft-content-card span.title_1x_3y {
        font-size: 20px;
    }
    msft-content-card.native-ad-content-card::part(heading-container) {
        background: ${U.IfY};
    }
    msft-content-card.native-ad-content-card::part(media-wrapper) {
        height: 156px;
        transition: height  0.3s;
        overflow: hidden;
    }
    msft-content-card.two-lines-heading::part(heading) {
        --heading-max-lines: 2;
    }
    msft-content-card.three-lines-heading::part(heading) {
        --heading-max-lines: 3;
    }

    msft-article msft-attribution[slot="attribution"].margin-5-decoration {
        margin-bottom: 5px;
    }
`.withBehaviors(new G.i("data.template.nativeAdMode",y.di.Adult,N.i`
                .card-button:not(:hover) {
                    background: transparent;
                }
            `));class q extends s{}const Y=(0,a.Z)((()=>{(0,n.M)({name:"msn-native-ad-card-template-facade",template:V,styles:W})(q)}))},19636:function(t,e,i){i.d(e,{kH:function(){return ot},zG:function(){return rt}});var a=i(39181),o=i(13988),n=i(29666),r=i(33940),s=i(89346),l=i(65620),d=i(26415),c=i(92773),p=i(84446);let g=class extends p.F{constructor(){super(...arguments),this.badgeText="",this.badgeTextColor="#FFFFFF",this.badgeBackgroundColor="#0078D4",this.badgeTextSize="12",this.badgeTextLineHeight="16",this.badgeTextFontWeight="600",this.badgeBorderRadius="4",this.paddingTop="",this.paddingBottom="",this.paddingLeft="",this.paddingRight=""}};(0,r.gn)([(0,l.Lj)({attribute:"badge-text"})],g.prototype,"badgeText",void 0),(0,r.gn)([(0,l.Lj)({attribute:"badge-text-color"})],g.prototype,"badgeTextColor",void 0),(0,r.gn)([(0,l.Lj)({attribute:"badge-background-color"})],g.prototype,"badgeBackgroundColor",void 0),(0,r.gn)([(0,l.Lj)({attribute:"badge-text-size"})],g.prototype,"badgeTextSize",void 0),(0,r.gn)([(0,l.Lj)({attribute:"badge-text-line-height"})],g.prototype,"badgeTextLineHeight",void 0),(0,r.gn)([(0,l.Lj)({attribute:"badge-text-font-weight"})],g.prototype,"badgeTextFontWeight",void 0),(0,r.gn)([(0,l.Lj)({attribute:"badge-border-radius"})],g.prototype,"badgeBorderRadius",void 0),(0,r.gn)([(0,l.Lj)({attribute:"padding-top"})],g.prototype,"paddingTop",void 0),(0,r.gn)([(0,l.Lj)({attribute:"padding-bottom"})],g.prototype,"paddingBottom",void 0),(0,r.gn)([(0,l.Lj)({attribute:"padding-left"})],g.prototype,"paddingLeft",void 0),(0,r.gn)([(0,l.Lj)({attribute:"padding-right"})],g.prototype,"paddingRight",void 0),g=(0,r.gn)([(0,c.uj)(d.EoX,"msn-native-ad-badge")],g);var h=i(53046),u=i(78562),m=i(67620);const v=h.i`


`.withBehaviors(new u.g("layoutStyle"),new m.j(["badgeTextSize","badgeTextLineHeight","badgeBackgroundColor","badgeBorderRadius","paddingTop","paddingBottom","paddingLeft","paddingRight","badgeTextColor","badgeTextFontWeight"],(t=>{const e=`\n            .native-ad-badge {\n                line-height: ${t.badgeTextLineHeight}px;\n                font-size: ${t.badgeTextSize}px;\n                background-color: ${t.badgeBackgroundColor};\n                border-radius: ${t.badgeBorderRadius}px;\n                padding-top:${t.paddingTop}px;\n                padding-bottom:${t.paddingBottom}px;\n                padding-left:${t.paddingLeft}px;\n                padding-right:${t.paddingRight}px;\n                color:${t.badgeTextColor};\n                font-weight:${t.badgeTextFontWeight};\n            }\n        `;return h.i`${e}`}))),f=a.d`
<span class="native-ad-badge">
    ${t=>t.badgeText}
</span>
`;let b=class extends g{};b=(0,r.gn)([(0,s.M)({name:"msn-native-ad-badge",template:f,styles:v})],b);let x=class extends p.F{constructor(){super(...arguments),this.text="",this.backgroundColor="",this.defaultBackgroundColor="#FFFFFF",this.color="#2065C1",this.isHovered=!1,this.ctaMode="default",this.destinationUrl="",this.telemetryMetadata=void 0}};(0,r.gn)([l.Lj],x.prototype,"text",void 0),(0,r.gn)([(0,l.Lj)({attribute:"background-color"})],x.prototype,"backgroundColor",void 0),(0,r.gn)([(0,l.Lj)({attribute:"default-background-color"})],x.prototype,"defaultBackgroundColor",void 0),(0,r.gn)([l.Lj],x.prototype,"color",void 0),(0,r.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-hovered"})],x.prototype,"isHovered",void 0),(0,r.gn)([(0,l.Lj)({attribute:"cta-mode"})],x.prototype,"ctaMode",void 0),(0,r.gn)([(0,l.Lj)({attribute:"destination-url"})],x.prototype,"destinationUrl",void 0),(0,r.gn)([(0,l.Lj)({attribute:"tel-metadata"})],x.prototype,"telemetryMetadata",void 0),x=(0,r.gn)([(0,c.uj)(d.EoX,"msn-native-ad-call-to-action")],x);const y=h.i`

.call-to-action {
    background-color: #FFFFFF;
    color: #2065C1;
    font-size: 14px; 
    font-weight: 600;
    height: 32px;
    line-height: 32px;
    display: inline-block;
    border-radius: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
}

.call-to-action-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    opacity: 0.3;
}

.call-to-action-txt {
    position: relative;
    border-radius: 20px;
    padding-left: 12px;
    padding-right: 12px;
}

.call-to-action-icon-container {
    background-color: #C6C0BA;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    position: relative;
}

.call-to-action-icon-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.3;
}

.call-to-action-icon {
    width: 9px;
    height: 15px;
    left: 12px;
    top: 8px;
    position: absolute;
    display: flex;
}

.call-to-action-mask-container {
    background: linear-gradient(180deg, rgba(43, 43, 43, 0.9) 0%, rgba(43, 43, 43, 0.35) 100%);
    position: absolute;
    width: 100%;
    height: 304px;
    bottom: 0;
    left: 0;
    animation: fadeIn 0.1s forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.call-to-action-mask-wrapper {
    width: fit-content;
    position: absolute;
    top: 113px;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    align-items: center;
}

.call-to-action-mask-text {
    font-size: 19px;
    font-weight: 600;
    display: inline-block;
}

.call-to-action-mask-icon{
    display: inline-block;
    width: 16px;
    height: 14px;
    margin-inline: 5px;
}

.txt-button-wrapper {
    display: inline-block;
    position: relative;
    padding: 4px 12px;
    line-height: 16px;
    font-size: 12px;
    color: #1a1a1a;
    border-radius: 100px;
    background: rgba(255, 255, 255, 0.7);
    font-weight: 400;
}

.txt-button-wrapper::before {
    content: "";
    position: absolute;
    inset: 0px;
    border-radius: 50px;
    padding: 1px;
    background: linear-gradient(rgba(239, 239, 239, 0.7) 90%, rgba(214, 214, 214, 0.7) 100%);
    -webkit-mask: linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px) content-box content-box, linear-gradient(rgb(255, 255, 255) 0px, rgb(255, 255, 255) 0px);
    -webkit-mask-composite: xor;
    pointer-events: none;
}
`.withBehaviors(new u.g("layoutStyle"),new m.j(["defaultBackgroundColor","backgroundColor","color"],(t=>h.i`
            .call-to-action.dynamic-styles {
                background: ${t.defaultBackgroundColor};
            }
            .call-to-action-txt.dynamic-styles {
                color: ${t.color};
            }
            .call-to-action-bg.dynamic-styles {
                background: ${t.backgroundColor};
            }
            .call-to-action-icon-bg.dynamic-styles {
                background: ${t.backgroundColor};
            }
            `))),C=a.d`
<svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.09854 16.6761L10.6426 9.25004C10.8715 9.05109 11 8.78131 11 8.5C11 8.2187 10.8715 7.94891 10.6426 7.74997L2.09854 0.323871C1.98594 0.222547 1.85126 0.141728 1.70234 0.0861287C1.55342 0.0305295 1.39326 0.0012641 1.23119 4.0055e-05C1.06912 -0.00118399 0.908396 0.0256578 0.758391 0.0789993C0.608386 0.132341 0.472105 0.211114 0.357501 0.310722C0.242897 0.41033 0.152265 0.528778 0.0908924 0.659155C0.0295204 0.789532 -0.00136224 0.929227 4.60857e-05 1.07009C0.00145442 1.21095 0.0351258 1.35016 0.0990954 1.47959C0.163065 1.60902 0.256052 1.72608 0.37263 1.82394L8.05377 8.5L0.37263 15.1761C0.256052 15.2739 0.163065 15.391 0.0990954 15.5204C0.0351258 15.6498 0.00145442 15.7891 4.60857e-05 15.9299C-0.00136224 16.0708 0.0295204 16.2105 0.0908924 16.3408C0.152265 16.4712 0.242897 16.5897 0.357501 16.6893C0.472105 16.7889 0.608386 16.8677 0.758391 16.921C0.908396 16.9743 1.06912 17.0012 1.23119 17C1.39326 16.9987 1.55342 16.9695 1.70234 16.9139C1.85126 16.8583 1.98594 16.7775 2.09854 16.6761Z" fill="black"/>
</svg>
`,w=a.d`
<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.5 14C6.22386 14 6 13.7761 6 13.5C6 13.2239 6.22386 13 6.5 13H13C14.1046 13 15 12.1046 15 11V3C15 1.89543 14.1046 1 13 1H6.5C6.22386 1 6 0.776142 6 0.5C6 0.223858 6.22386 0 6.5 0H13C14.6569 0 16 1.34315 16 3V11C16 12.6569 14.6569 14 13 14H6.5ZM6.64645 3.14645C6.84171 2.95118 7.15829 2.95118 7.35355 3.14645L10.8536 6.64645C11.0488 6.84171 11.0488 7.15829 10.8536 7.35355L7.35355 10.8536C7.15829 11.0488 6.84171 11.0488 6.64645 10.8536C6.45118 10.6583 6.45118 10.3417 6.64645 10.1464L9.29289 7.5H0.5C0.223858 7.5 0 7.27614 0 7C0 6.72386 0.223858 6.5 0.5 6.5H9.29289L6.64645 3.85355C6.45118 3.65829 6.45118 3.34171 6.64645 3.14645Z" fill="white"/>
</svg>
`,$=a.d`
    ${(0,o.g)((t=>"arrow"===t.ctaMode),a.d`
        <a 
            class="call-to-action-click-wrapper"
            target = "_blank"
            href = ${t=>t.destinationUrl}
            data-t="${t=>t.telemetryMetadata}"
            aria-label=${t=>t.text}
        >
            <div class="call-to-action-icon-container" title="${t=>t.text}">
                <div class="call-to-action-icon-bg dynamic-styles">
                </div>
                <div class="call-to-action-icon dynamic-styles">
                    ${C}
                </div>
            </div>
        </a>
    `)}
    ${(0,o.g)((t=>"mask"===t.ctaMode),a.d`
        ${(0,o.g)((t=>t.isHovered),a.d`
            <div class="call-to-action-mask-container">
                <div class="call-to-action-mask-wrapper">
                    <div class="call-to-action-mask-text">
                        ${t=>t.text}
                    </div>
                    <div class="call-to-action-mask-icon">
                        ${w}
                    </div>
                </div>
            </div>
        `)}
    `)}
    ${(0,o.g)((t=>"default"===t.ctaMode),a.d`
        <div class="txt-button-wrapper">
            ${t=>t.text}
        </div>
    `)}
    
`;let k=class extends x{};k=(0,r.gn)([(0,s.M)({name:"msn-native-ad-call-to-action",template:$,styles:y})],k);let L=class extends p.F{constructor(){super(...arguments),this.discountText=""}};(0,r.gn)([(0,l.Lj)({attribute:"discount-text"})],L.prototype,"discountText",void 0),L=(0,r.gn)([(0,c.uj)(d.EoX,"msn-native-ad-sale-highlight-badge")],L);const T=a.d`
<svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.06591 0.163636L0.156818 5.07273C-0.0522727 5.28182 -0.0522727 5.62727 0.156818 5.84545L4.15682 9.84545C4.36591 10.0545 4.71136 10.0545 4.92955 9.84545L9.83864 4.93636C9.93864 4.82727 9.99318 4.69091 9.99318 4.54545V0.545455C9.99318 0.245455 9.74773 0 9.44773 0H5.44773C5.30227 0 5.16591 0.0545455 5.06591 0.163636ZM8.52955 2.77273C8.475 2.89091 8.40227 3 8.31136 3.09091C8.22046 3.18182 8.12045 3.25455 7.99318 3.3C7.86591 3.34545 7.74773 3.38182 7.61136 3.38182C7.475 3.38182 7.33864 3.35455 7.22045 3.3C7.10227 3.25455 6.99318 3.18182 6.90227 3.09091C6.81136 3 6.73864 2.89091 6.69318 2.77273C6.63864 2.65455 6.61136 2.52727 6.61136 2.38182C6.61136 2.23636 6.63864 2.10909 6.69318 1.99091C6.73864 1.88182 6.81136 1.77273 6.90227 1.69091C6.99318 1.6 7.10227 1.52727 7.22045 1.47273C7.33864 1.41818 7.46591 1.39091 7.61136 1.39091C7.75682 1.39091 7.88409 1.41818 8.00227 1.47273C8.12046 1.52727 8.22955 1.6 8.31136 1.69091C8.40227 1.78182 8.475 1.88182 8.52955 2C8.58409 2.11818 8.61136 2.24545 8.61136 2.39091C8.61136 2.53636 8.575 2.65455 8.52955 2.77273Z" fill="white"/>
</svg>
`,S=a.d`
<a class="sale-highlight-badge" href="javascript:void 0;">
    ${T}
    <span class="sale-highlight-badge-text">
        ${t=>t.discountText}
    </span>
</a>
`,F=h.i`
.sale-highlight-badge {
    background: #0078D4;
    border-radius: 4px;
    display: flex;
    font-size: 12px;
    color: #FFF;
    align-items: center;
    padding: 2px 8px;
    line-height: 16px;
    font-family: Segoe UI;
    box-sizing: border-box;
    text-decoration: none;
}

.sale-highlight-badge .sale-highlight-badge-text {
    margin-left: 5px;
    white-space: nowrap;
}
`.withBehaviors(new u.g("layoutStyle"));let A=class extends L{};A=(0,r.gn)([(0,s.M)({name:"msn-native-ad-sale-highlight-badge",template:S,styles:F})],A);var I=i(87697),M=i(13400);function _(t,e="",i="",a=""){if(0===t||1===t)return e;if(t>1&&t<=30)return i.replace("{0}",String(t));if(t>30){const e=(null===M.jG||void 0===M.jG?void 0:M.jG.CurrentMarket)||"en-us",i=new Date(Date.now());i.setDate(i.getDate()+t);const o=i.toLocaleDateString(e);return a.replace("{0}",o)}return""}let j=class extends p.F{constructor(){super(...arguments),this.show=!1,this.disableTimeout=!1,this.showToast=!1,this.arrowOffset="",this.duration=1e3,this.marginLeft="0",this.isDrConfig=!1,this.displayedText="",this.promotionalText="",this.redemptionCode="",this.daysFromExpiration="",this.destinationURL="",this.underneathPopUp=!1,this.displayExpirationDate=!1,this.timer=Date.now(),this.handleOnCopyClick=t=>()=>{this.showToast=!0,setTimeout((()=>this.showToast=!1),1e3)}}connectedCallback(){super.connectedCallback();const{nativeAdExpiresToday:t="",nativeAdExpiresInDays:e="",nativeAdExpiresOnCertainDay:i="",nativeAdExpiresTodayPopupWithCode:a="",nativeAdExpiresInDaysPopupWithCode:o="",nativeAdExpiresOnCertainDayPopupWithCode:n="",nativeAdExpiresTodayPopupWithoutCode:r="",nativeAdExpiresInDaysPopupWithoutCode:s="",nativeAdExpiresOnCertainDayPopupWithoutCode:l=""}=this.localizedStrings;this.expirationDate=_(Number(this.daysFromExpiration),t,e,i),this.expirationDatePopup=_(Number(this.daysFromExpiration),this.redemptionCode?a:r,this.redemptionCode?o:s,this.redemptionCode?n:l)}handlePopupWindowClick(t,e){"shop-btn"!==e.event.target.id&&e.event.stopPropagation()}onMouseEnter(t){var e,i,a;const o=null===(a=null===(i=null===(e=t.shadowRoot)||void 0===e?void 0:e.querySelector("decoration-special-offer"))||void 0===i?void 0:i.shadowRoot)||void 0===a?void 0:a.querySelector(".special-offer-btn-container"),n=(null==o?void 0:o.offsetWidth)/2,r=t.offsetLeft;this.arrowOffset=this.arrowOffset||n+r-8+"px",clearTimeout(this.timer),this.show=!0}onMouseLeave(){this.handleHide()}onPopupWindowMouseEnter(){clearTimeout(this.timer),this.disableTimeout=!0}onPopupWindowMouseLeave(){this.disableTimeout=!1,this.handleHide()}handleHide(){this.disableTimeout||(this.timer=window.setTimeout((()=>{this.show=!1}),this.duration))}};(0,r.gn)([I.LO],j.prototype,"show",void 0),(0,r.gn)([I.LO],j.prototype,"disableTimeout",void 0),(0,r.gn)([I.LO],j.prototype,"showToast",void 0),(0,r.gn)([I.LO],j.prototype,"arrowOffset",void 0),(0,r.gn)([l.Lj],j.prototype,"duration",void 0),(0,r.gn)([(0,l.Lj)({attribute:"margin-left"})],j.prototype,"marginLeft",void 0),(0,r.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-dr-config"})],j.prototype,"isDrConfig",void 0),(0,r.gn)([(0,l.Lj)({attribute:"displayed-text"})],j.prototype,"displayedText",void 0),(0,r.gn)([(0,l.Lj)({attribute:"promotional-text"})],j.prototype,"promotionalText",void 0),(0,r.gn)([(0,l.Lj)({attribute:"redemption-code"})],j.prototype,"redemptionCode",void 0),(0,r.gn)([(0,l.Lj)({attribute:"days-from-expiration"})],j.prototype,"daysFromExpiration",void 0),(0,r.gn)([(0,l.Lj)({attribute:"destination-url"})],j.prototype,"destinationURL",void 0),(0,r.gn)([(0,l.Lj)({attribute:"underneath-pop-up",mode:"boolean"})],j.prototype,"underneathPopUp",void 0),(0,r.gn)([(0,l.Lj)({mode:"boolean",attribute:"display-expiration-date"})],j.prototype,"displayExpirationDate",void 0),(0,r.gn)([I.LO],j.prototype,"localizedStrings",void 0),(0,r.gn)([I.LO],j.prototype,"expirationDate",void 0),(0,r.gn)([I.LO],j.prototype,"expirationDatePopup",void 0),j=(0,r.gn)([(0,c.uj)(d.EoX,"msn-native-ad-special-offer")],j);const B=h.i`
    :host {
        --accent-fill-rest: #0078D4;
        --accent-fill-hover: #006CBE;
        --accent-fill-active: #1683D8;
        --accent-fill-focus: #888888;
    }
    .container {
        display: flex;
        flex-direction: column;
    }

    .description {
        white-space: initial;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }

    .text-section {
        display: flex;
        padding: 12px 12px 0px 12px;
        flex-direction: column;
        font-size: 12px;
    }

    .action-section {
        display: flex;
        padding: 12px;
        justify-content: space-between;
    }

    .title {
        font-weight: bold;
        white-space: initial;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }

    .shop-btn {
        background: var(--accent-fill-rest);
        color: #FFFFFF;
        width: 68px;
        height: 32px;
        border-radius: 20px;
        font-size: 12px;
        text-align: center;
        line-height: 32px;
        cursor: pointer;
    }

    .shop-btn:hover {
        background: var(--accent-fill-hover);
    }

    .shop-btn:active {
        background: var(--accent-fill-active);
    }

    .shop-btn:focus {
        background: var(--accent-fill-focus);
    }
`.withBehaviors(new u.g("layoutStyle"),new m.j(["arrowOffset","marginLeft","isDrConfig"],(t=>h.i`
                .popup-window {
                    margin-left: ${t.marginLeft}px;
                    color: #000000;
                    cursor: default;
                    z-index: 1;
                    background-color: #FFFFFF;
                    border-radius: 4px;
                    margin-bottom: 11px;
                    width: 276px;
                    min-height: 102px;
                    max-height: 140px;
                    box-shadow: 0px 0.6px 1.8px rgb(0 0 0 / 10%), 0px 3.2px 7.2px rgb(0 0 0 / 13%);
                }
                .underneathPopUp {
                    position: fixed;
                    margin-top: 32px;
                }

                .popup-window::after {
                    content: "";
                    width: 0;
                    height: 0;
                    border-left: 8px solid transparent;
                    border-right: 8px solid transparent;
                    ${(t=>t.underneathPopUp?"border-bottom":"border-top")(t)}: 8px solid #FFFFFF;
                    position: absolute;
                    margin-inline-start: ${t.arrowOffset};
                    bottom: ${(t=>t.isDrConfig?"":t.underneathPopUp?"101":"26")(t)}px;
                }
            `)));let z=class extends s.H{constructor(){super(...arguments),this.code="",this.copyText=""}};(0,r.gn)([l.Lj],z.prototype,"code",void 0),(0,r.gn)([I.LO],z.prototype,"onCopyClick",void 0),(0,r.gn)([(0,l.Lj)({attribute:"copy-text"})],z.prototype,"copyText",void 0),z=(0,r.gn)([(0,c.uj)(d.EoX,"msn-native-ad-copy-input")],z);const E=h.i`
    .input-container {
        display: flex;
        height: 32px;
        width: 172px;
        justify-content: space-between;
        background: #EDEDED;
        border-radius: 4px;
        align-items: center;
        font-size: 14px;
        cursor: initial;
    }
    
    .promotion-code {
        margin-left: 12px;
    }

    .copy-icon {
        margin-right: 12px;
        cursor: pointer;
    }
`,H=a.d`
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5.50293V14H3.42857V11.375H0V0H5.75223L8.32366 2.625H9.1808L12 5.50293ZM9.42857 5.25H10.5335L9.42857 4.12207V5.25ZM3.42857 2.625H7.10491L5.39062 0.875H0.857143V10.5H3.42857V2.625ZM11.1429 6.125H8.57143V3.5H4.28571V13.125H11.1429V6.125Z" fill="#0078D4"/>
    </svg>
`,O=a.d`
    <div class="input-container">
        <div class="promotion-code">${t=>t.code}</div>
        <div 
            class="copy-icon"
            title=${t=>t.copyText}
            aria-label=${t=>t.copyText}
            @click=${t=>(navigator.clipboard.writeText(t.code),t.onCopyClick(),!0)}
         >
         ${H}
        </div>
    </div>

`;let D=class extends z{};D=(0,r.gn)([(0,s.M)({name:"msn-native-ad-copy-input",template:O,styles:E})],D);var R=i(83529);let P=class extends s.H{constructor(){super(...arguments),this.duration=1e3,this.show=!1,this.message="Copied!"}};(0,r.gn)([l.Lj],P.prototype,"duration",void 0),(0,r.gn)([(0,l.Lj)({mode:"boolean"})],P.prototype,"show",void 0),(0,r.gn)([l.Lj],P.prototype,"message",void 0),(0,r.gn)([l.Lj],P.prototype,"position",void 0),(0,r.gn)([l.Lj],P.prototype,"top",void 0),(0,r.gn)([l.Lj],P.prototype,"left",void 0),P=(0,r.gn)([(0,c.uj)(d.EoX,"msn-native-ad-toast")],P);const Z=h.i`
    .toast {
        display: flex;
        width: 81px;
        height: 38px;
        background: #3B3B3B;
        border-radius: 6px;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 14px;
        font-weight: normal;
        box-shadow: 0px 12.8px 28.8px rgba(0, 0, 0, 0.13), 0px 0px 9.2px rgba(0, 0, 0, 0.11);
    }
`.withBehaviors(new m.j(["position","top","left"],(t=>h.i`
                :host { 
                    position: ${t.position};
                    top: ${t.top}px; 
                    left: ${t.left}px;
                }
            `))),V=a.d`
    ${(0,o.g)((t=>t.show),a.d`
        <div class="toast">
            ${t=>t.message}
        </div>
    `)}
`;let U=class extends P{};U=(0,r.gn)([(0,s.M)({name:"msn-native-ad-toast",template:V,styles:Z})],U),R.B;const N=a.d`
    ${(0,o.g)((t=>t.show),a.d`
        <msn-native-ad-toast show=${t=>t.showToast} position="fixed" top="7" left="110"></msn-native-ad-toast>
        <div class="popup-window ${t=>t.underneathPopUp?"underneathPopUp":""}"
            @click=${(t,e)=>t.handlePopupWindowClick(t,e)}
            @mouseenter=${t=>t.onPopupWindowMouseEnter()}
            @mouseleave=${t=>t.onPopupWindowMouseLeave()}
        >
            <div class="container">
                <div class="text-section">
                    <div class="title">${t=>t.promotionalText}</div>
                    <div class="description">${t=>t.expirationDatePopup}${t=>{var e;return t.redemptionCode?null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdSpecialOfferEnterCode:""}}</div>
                </div>
                <div class="action-section">
                    ${(0,o.g)((t=>t.redemptionCode),a.d`
                        <msn-native-ad-copy-input
                            copy-text=${t=>{var e;return null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdSpecialOfferCopy}}
                            :onCopyClick=${t=>t.handleOnCopyClick(t)}
                            code=${t=>t.redemptionCode}
                        ></msn-native-ad-copy-input>
                    `)}
                    <div
                        id="shop-btn"
                        class="shop-btn"
                        title=${t=>{var e;return null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdSpecialOfferShop}}
                        aria-label=${t=>{var e;return null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdSpecialOfferShop}}
                    >${t=>{var e;return null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdSpecialOfferShop}}</div>
                </div>
            </div>
        </div>
    `)}
    <decoration-special-offer
        @mouseenter=${(t,e)=>t.onMouseEnter(t)}
        @mouseleave=${t=>t.onMouseLeave()}
        data=${t=>t.displayedText}
        expiration-date=${t=>t.expirationDate}
        display-expiration-date=${t=>t.displayExpirationDate}
    ></decoration-special-offer>
`;let G=class extends j{};G=(0,r.gn)([(0,s.M)({name:"msn-native-ad-special-offer",template:N,styles:B})],G);var W=i(53212),q=i(90351),Y=i(19628),J=i(17579),X=i(15059),K=i(2864),Q=i(42950),tt=i(18179),et=i(792);const it=t=>{var e;return(null===(e=t.template)||void 0===e?void 0:e.progressiveDisplay)&&t.hasAnyInlineDecoration?"native-ad-content-card":""},at=(t,e)=>{var i;(null===(i=t.template)||void 0===i?void 0:i.progressiveDisplay)&&t.hoverState&&t.hoverState.isHovered!==e&&(t.hoverState.isHovered=e)},ot=(t,e)=>{if((0,et.eC)(t))return a.d`
        <div class="heading" part="heading" style="display: flex; align-items: center;">
            ${(0,o.g)((t=>e),a.d`
                <h3 class="info-pane-slide-title" style="pointer-events: none; flex: 1;" part="info-pane-slide-title">
                    ${t=>t.title}
                </h3>
            `)}
            ${(0,o.g)((t=>!e),a.d`
                <div class="cta-title" style="flex:1; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient: vertical;">
                    <span style = "font-size: ${t=>t.feedFontSize}px; 
                        line-height: "28px";
                        "${t=>t.fontFamilyOnCardContent?`font-family:${t.fontFamilyOnCardContent}, Segoe UI, Segoe UI Midlevel, Arial, Sans-Serif;`:""}"
                    ">
                        ${t=>t.title}
                    </span>
                </div>
            `)}
            <div class="cta-button" style="margin-inline-start: 4px; z-index: 2;">
                <msn-native-ad-call-to-action 
                    text=${t=>t.localizedStrings.nativeAdLearnMoreText||"learn more"}
                    default-background-color="#C6C0BA"
                    background-color="${t=>t.layoutColor}"
                    color="#000000"
                    is-hovered=${t=>t.hoverState&&t.hoverState.isHovered}
                    cta-mode="arrow"
                    destination-url=${t=>t.destinationUrl}
                    tel-metadata=${t=>{var e,i;return null===(i=null===(e=null==t?void 0:t.adTelemetryContext)||void 0===e?void 0:e.destination)||void 0===i?void 0:i.getMetadataTag()}}
                    ${(0,W.lq)(!0,!1)}
                >
                </msn-native-ad-call-to-action>
        </div>`;if((0,et.E2)(t))return a.d`
            <div class="sale-highlight-badge" style="position: absolute; bottom: 268px;">
                <msn-native-ad-sale-highlight-badge
		            component-name="sale-highlight-badge"
                    discount-text="${t=>{var e,i;return Y.Ld.Format((null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdOnSaleTextCapital)||"{0}% OFF",null===(i=t.assets)||void 0===i?void 0:i.discount)}}"
                >
                </msn-native-ad-sale-highlight-badge>
            </div>
        `;if((0,et.sV)(t)){const{displayedText:i="",promotionalText:n="",redemptionCode:r="",daysFromExpiration:s="",destinationURL:l=""}=t.assets.specialOffer;return a.d`
            <style>
                ${(0,o.g)((t=>t.show&&e),a.d`
                    msft-info-pane-slide msft-attribution[slot="attribution"] {
                        bottom: 159px;
                        position: absolute;
                        z-index: 2;
                    }
                `)}
                ${(0,o.g)((t=>!t.show&&e),a.d`
                msft-info-pane-slide msft-attribution[slot="attribution"] {
                    bottom: 261px;
                    position: absolute;
                    z-index: 2;
                }
            `)}
            </style>
            <msft-attribution 
                slot="attribution"
                @click=${()=>t.destinationUrl&&window.open(t.destinationUrl)}
                ${(0,W.lq)(!0,!1)}
            >
                <msn-native-ad-special-offer
                    ${(0,W.lq)(!0,!1)}
                    :localizedStrings=${t=>t.localizedStrings}
                    displayed-text="${i}"
                    promotional-text="${n}"
                    redemption-code="${r}"
                    days-from-expiration="${s}"
                    destination-url="${l}"
                    margin-left="-6"
                    ${e?"underneath-pop-up":""}
                    display-expiration-date=${t=>(0,et.RV)(t)}
                ></msn-native-ad-special-offer>
            </msft-attribution>
        `}return(0,Q.LX)(t)?a.d`
            ${(0,o.g)((t=>!e),a.d`
                <style>
                    ${(0,o.g)((t=>(0,Q.jv)(t)),a.d`
                        msft-attribution::part(content) {
                            width: 100%;
                        }
                    `)}
                    ${(0,o.g)((t=>(0,Q.nT)(t)),a.d`
                        msft-attribution[slot="attribution"] {
                            height: 64px;
                        }
                        msn-native-ad-highlight-rating {
                            position: absolute;
                            bottom: 0;
                        }
                    `)}
                </style>
                <msft-attribution slot="attribution">
                    ${(0,Q.ae)()}
                </msft-attribution>
            `)}
            ${(0,o.g)((t=>e),a.d`
            <msft-attribution slot="attribution">
                <decoration-rating
                    rating=${t=>t.assets.rating}
                    review-data=${t=>t.assets.review}
                    is-info-pane=${e}
                ></decoration-rating>
                </msft-attribution>
            `)}
        `:(0,X.I7)(t)?a.d`
            <div class="native-ad-free-shipping-badge" style="position: absolute; bottom: 268px;">
                <msn-native-ad-badge badge-text="${t=>(0,q.Z)(t.localizedStrings,"nativeAdFreeShippingText")}" padding-top="1" padding-bottom="3" padding-left="8" padding-right="8">
                </msn-native-ad-badge>
            </div>
        `:(0,K.BR)(t)?a.d`
            <msft-attribution slot="attribution" class="margin-5-decoration">
                ${(0,K.HG)()}
            </msft-attribution>
        `:a.d`${t=>{var e,i,a;return(0,J.o)("attribution",!1,null===(e=t.template)||void 0===e?void 0:e.progressiveDisplay,(null===(i=t.hoverState)||void 0===i?void 0:i.isHovered)?65:25,null===(a=t.hoverState)||void 0===a?void 0:a.isHovered,!1,(0,tt.J0)(t),(e=>(0,tt.Vy)(t,e)))}}`},nt=t=>((t,e,i={})=>a.d`
    <!--
        Only use placeholder when the card size is 1x_2y
    -->
    ${(0,o.g)((t=>t.cardSize===t.FeedLayoutCardSize._1x_2y&&t.imageData),a.d`
        <div slot="${t}" style="width: ${e.width}px;height: ${e.height}px;">
            ${t=>t.renderImageTag("anim-content",i)}
        <div>
    `)}
    ${(0,o.g)((t=>t.cardSize===t.FeedLayoutCardSize._1x_2y&&!t.imageData),a.d`
        <div slot="${t}" style="width: ${e.width}px;height: ${e.height}px;"></div>
    `)}
    ${(0,o.g)((t=>t.cardSize!==t.FeedLayoutCardSize._1x_2y&&t.imageData),a.d`
        <div slot="${t}">
            ${t=>t.renderImageTag("anim-content",i)}
        </div>
    `)}
`)("image",t.ContentCardImageSizes._300x225),rt=a.d`
    <style>
        :host {
            --article-native-ad-heading-margin-bottom: -12px;
        }
        msft-ad-label {
            margin-inline-end: 8px;
        }

        ${(0,o.g)((t=>{var e;return!(null===(e=t.assets)||void 0===e?void 0:e.specialOffer)}),a.d`
        msft-article msft-attribution[slot="attribution"] {
            display: flex;
            align-self: end;
        }
        `)}

        ${(0,o.g)((t=>{var e;return null===(e=t.assets)||void 0===e?void 0:e.specialOffer}),a.d`
            msft-article msft-attribution[slot="attribution"] {
                cursor: pointer;
                display: flex;
                align-self: end;
                overflow: visible;
                max-width: 300px;
                z-index: 2;
                margin-bottom: 5px;
            }
            
            msft-article msft-attribution[slot="attribution"]::part(content) {
                overflow: visible;
            }
        `)}

        ${(0,o.g)((t=>{var e;return null===(e=t.assets)||void 0===e?void 0:e.rating}),a.d`
            msft-article msft-attribution[slot="attribution"] {
                margin-bottom: 1px;
            }
        `)}

        msft-article span.title_1x_2y,
        msft-article span.title_2x_2y {
            font-size: 20px;
        }
        
        ${(0,o.g)((t=>{var e;return(null===(e=t.template)||void 0===e?void 0:e.nativeAdMode)===n.di.Adult}),a.d`
            msft-article div[slot="end-action"] {
                --neutral-foreground-rest: white;
            }
        `)}
        msft-article div[slot="end-action"] {
            display: flex;
            align-items: center;
            --control-corner-radius: 100;
            position: relative;
            bottom: -8px;
        }

        msft-attribution[slot="start-action"] {
            margin-top: 15px;
        }
        

        msft-article a.ad-choice-icon {
            display: inline-flex;
            justify-content: center;
            min-width: calc((var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px); 
        }

        msft-article.native-ad {
            --article-native-ad-heading-margin-bottom: -1px;
            --heading-max-lines: 2;
        }

        msft-article.nativeAdVideo-river::part(image) {
            z-index: 2;
        }

        msft-article.native-ad.gradient {
            --article-native-ad-actions-height: 33px;
            --article-native-ad-heading-margin-bottom: 6px;
        }

        msft-article.native-ad::part(heading) {
            margin-bottom: var(--article-native-ad-heading-margin-bottom);
            color: var(--msft-card-font-color);
        }

        msft-article.native-ad.long-gradient::part(gradient) {
            top: -55px;
        }

        ${(0,o.g)((t=>{var e;return null===(e=t.template)||void 0===e?void 0:e.immersiveThemeColor}),a.d`
            @media (prefers-color-scheme: light) {
                msft-article::part(gradient) {
                    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 45.83%, #FFFFFF 100%);
                }

                msft-article::part(article) {
                    background: #FFFFFF;
                }
                msft-article::part(heading) {
                    color: #000000;
                }
            }

            @media (prefers-color-scheme: dark) {
                msft-article::part(gradient) {
                    background: linear-gradient(180deg, transparent 0%, rgba(43, 43, 43, 0.8) 62.5%, #2E2E2E 100% );
                }

                msft-article::part(article) {
                    background: #2B2B2B;
                }
                msft-article::part(heading) {
                    color: #FFFFFF;
                }
            }
        `)}

        ${(0,o.g)((t=>t.layoutGap),a.d`
            msft-article-card[size="_1x_2y"] msft-article::part(gradient) {
                bottom: ${t=>67+t.layoutGap}px;
            }

            msft-article-card[size="_2x_2y"] msft-article::part(gradient) {
                bottom: 0px;
            }
        `)}

        ${(0,o.g)((t=>"rtl"===document.dir),a.d`
            msft-article-card msft-article msn-inline-group::part(inline-item) {
                padding-left: 12px;
                padding-right: unset;
            }
        `)}

        ${(0,o.g)((t=>["ltr",""].includes(document.dir)),a.d`
            msft-article-card msft-article msn-inline-group::part(inline-item) {
                padding-right: 12px;
            }
        `)}

        :host {
            grid-area:${t=>t.grid_area};
        }

        msft-article-card[size="_1x_2y"],
        msft-article-card[size="_2x_2y"] {
            --card-width: auto;
            --card-height: auto;
        }

        ${(0,o.g)((t=>{var e;return!(null===(e=t.assets)||void 0===e?void 0:e.specialOffer)}),a.d`
        msft-attribution {
            max-width: 100%;
        }
    `)}

        msft-article.native-ad::part(actions) {
            height: var(--article-native-ad-actions-height);
            align-items: center;
        }
        
        msft-article.two-lines-heading::part(heading) {
            -webkit-line-clamp: 2;
        }

        msft-article.special-offer::part(heading),
        msft-article.deco-rating::part(heading),
        msft-article.deco-free-shipping::part(heading) {
            margin-bottom: -1px;
        }

        msft-article.three-lines-heading::part(heading) {
            -webkit-line-clamp: 3;
        }
        msft-article-card msft-article::part(heading):after {
            top: calc(100% - 304px - 8px);
        }

        ${(0,o.g)((t=>t.useTitleFontSize),a.d`
            msft-article-card msft-article {
                --msft-article-heading-font-size: ${t=>t.useTitleFontSize}px;
                --msft-article-heading-line-height: 24px;
            }

            msft-article-card msft-article::part(attribution) {
                height: 28px;
            }

            msft-article-card[size="_1x_2y"] msft-article:not(.no-image)::part(heading) {
                margin-bottom: -4px;
            }

            msft-article-card[size="_1x_2y"] msft-article:not(.no-image)::part(gradient) {
                background: linear-gradient(180deg, transparent 0%, var(--gradient-mid-color) 46%, var(--gradient-color) 100%);
                top: 5px;
            }
        `)}

        ${(0,o.g)((t=>t.useShorterGradient),a.d`
            msft-article-card[size="_1x_2y"] msft-article[id="native_ad_${t=>t.id}"]::part(gradient) {
                top: 11px;
                bottom: 79px;
                background: linear-gradient(180deg, transparent 0%, var(--gradient-mid-color) 56%, var(--gradient-color) 100%);
            }
        `)}

        ${(0,o.g)((t=>t.enableNativeAdHoverContrast),a.d`
            msft-article-card:hover msft-article[id="native_ad_${t=>t.id}"]::part(image) {
                opacity: 1;
            }
            msft-article-card msft-article[id="native_ad_${t=>t.id}"]:hover {
                filter: contrast(115%);
            }
        `)}
        

    </style>
    <msft-article-card
        style="
            grid-area:${t=>t.grid_area};
            height: ${t=>t.ContentCardImageSizes._300x304.height}px;
        "
        size="${t=>t.cardSize}"
        card-fill-color=${t=>{var e;return(null===(e=t.template)||void 0===e?void 0:e.nativeAdMode)===n.di.Adult?"#2E2E2E":t.adBackgroundColor}}
    >
        <msft-article
            id="native_ad_${t=>t.id}"
            href=${t=>t.destinationUrl}
            target="_blank"
            title=${t=>t.title}
            ?image-priority=${t=>t.imagePriority}
            class=${t=>(t=>{var e,i,a;const o=[it(t)];return o.push("native-ad"),t.hasAnyInlineDecoration||t.adSlugGA?o.push("two-lines-heading"):o.push("three-lines-heading"),(null===(e=t.assets)||void 0===e?void 0:e.specialOffer)&&o.push("special-offer"),(null===(i=t.assets)||void 0===i?void 0:i.rating)&&o.push("deco-rating"),(null===(a=t.assets)||void 0===a?void 0:a.freeShipping)&&o.push("deco-free-shipping"),o.filter((t=>t)).join(" ")})(t)}
            data-t="${t=>t.id?t.adTelemetryContext.nativeAdCard.getMetadataTag():""}"
            :anchorTelemetryTag=${t=>t.adTelemetryContext&&t.adTelemetryContext.destination&&t.adTelemetryContext.destination.getMetadataTag()}
            ${(0,W.lq)()}
            @mouseenter=${t=>at(t,!0)}
            @mouseleave=${t=>at(t,!1)}
        >
            ${t=>(0,et.eC)(t)?"":t.renderTitle()}
            ${t=>nt(t)}
            ${t=>ot(t)}
            ${t=>t.renderStartSection("start-action",t.destinationUrl)}
            ${t=>t.renderEndSection("end-action")}
        </msft-article>
    </msft-article-card>
`},29837:function(t,e,i){i.d(e,{Zg:function(){return k}});var a=i(33940),o=i(65620),n=i(87697),r=i(26415),s=i(92773),l=i(84446);let d=class extends l.F{constructor(){super(...arguments),this.disclaimer="",this.disclaimerTooltip="Disclaimer",this.popupMargin=0,this.url="",this.isHovered=!1}updateDisclaimerHoverState(t){this.isHovered=t}connectedCallback(){super.connectedCallback()}};(0,a.gn)([(0,o.Lj)({attribute:"disclaimer"})],d.prototype,"disclaimer",void 0),(0,a.gn)([(0,o.Lj)({attribute:"disclaimer-tooltip"})],d.prototype,"disclaimerTooltip",void 0),(0,a.gn)([(0,o.Lj)({attribute:"popup-margin"})],d.prototype,"popupMargin",void 0),(0,a.gn)([(0,o.Lj)({attribute:"url"})],d.prototype,"url",void 0),(0,a.gn)([(0,o.Lj)({attribute:"tel-metadata"})],d.prototype,"telemetryMetadata",void 0),(0,a.gn)([n.LO],d.prototype,"isHovered",void 0),d=(0,a.gn)([(0,s.uj)(r.EoX,"msn-native-ad-disclaimer")],d);var c=i(89346),p=i(53046),g=i(67620),h=i(78562);const u=p.i`
.native-ad-disclaimer-container{
    width: 32px;
    height: 32px;
    cursor: pointer;
}

.native-ad-disclaimer-container svg{
    position: absolute;
    margin-inline: 9px;
    margin-top: 9px;
}

.disclaimer-popup-container {
    position: absolute;
    bottom: 100%;
    width: 32px;
    margin-inline: 9px;
}

.disclaimer-popup-container svg{
    margin-inline: 0px;
    margin-top: 0px;
}

.disclaimer-popup {
    position: relative;
    color: var(--fill-color);
    background: var(--neutral-foreground-rest);
    padding: 8px;
    font-size: 12px;
    width: 152px;
    max-width: 152px;
    max-height: 48px;
    bottom: 7px;
    border-radius: 2px;
    z-index: 1;
}

.disclaimer-popup-text {
    -webkit-line-clamp: 2;
    text-overflow:ellipsis;
    overflow:hidden;
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-align: center;
    font-size: 12px;
}

.disclaimer-popup-arrow {
    height: 15px;
    width: 15px;
    position: absolute;
    bottom: 0px;
}

.disclaimer-popup-arrow svg rect {
    fill: var(--neutral-foreground-rest);
}

.native-ad-disclaimer-container svg path {
    fill: var(--neutral-foreground-rest);
}

@media (forced-colors: active) {
    .disclaimer-popup {
        color: buttonface;
        background: buttontext;
    }

    .disclaimer-popup-arrow svg rect {
        fill: buttontext;
    }

    .native-ad-disclaimer-container svg path {
        fill: buttontext;
    }
    
}
`.withBehaviors(new h.g("layoutStyle"),new g.j(["popupMargin"],(t=>{const e=(t.popupMargin?t.popupMargin-168-5:5)+"px";return p.i`
            .disclaimer-popup.disclaimer-popup-dynamic-style {
                margin-inline: ${e};
            }
        `})));var m=i(39181),v=i(13988);const f=m.d`
<svg width="15" height="15" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="12" width="16" height="16" transform="rotate(-45 0 12)" fill="white"/>
</svg>
`,b=m.d`
<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 15C6.80729 15 6.14323 14.9115 5.50781 14.7344C4.8724 14.5573 4.27344 14.3073 3.71094 13.9844C3.14844 13.6615 2.64323 13.2708 2.19531 12.8125C1.7474 12.3542 1.35677 11.8464 1.02344 11.2891C0.690104 10.7318 0.4375 10.1354 0.265625 9.5C0.09375 8.86458 0.00520833 8.19792 0 7.5C0 6.80729 0.0885417 6.14323 0.265625 5.50781C0.442708 4.8724 0.692708 4.27344 1.01562 3.71094C1.33854 3.14844 1.72917 2.64323 2.1875 2.19531C2.64583 1.7474 3.15365 1.35677 3.71094 1.02344C4.26823 0.690104 4.86458 0.4375 5.5 0.265625C6.13542 0.09375 6.80208 0.00520833 7.5 0C8.19271 0 8.85677 0.0885417 9.49219 0.265625C10.1276 0.442708 10.7266 0.692708 11.2891 1.01562C11.8516 1.33854 12.3568 1.72917 12.8047 2.1875C13.2526 2.64583 13.6432 3.15365 13.9766 3.71094C14.3099 4.26823 14.5625 4.86458 14.7344 5.5C14.9062 6.13542 14.9948 6.80208 15 7.5C15 8.19271 14.9115 8.85677 14.7344 9.49219C14.5573 10.1276 14.3073 10.7266 13.9844 11.2891C13.6615 11.8516 13.2708 12.3568 12.8125 12.8047C12.3542 13.2526 11.8464 13.6432 11.2891 13.9766C10.7318 14.3099 10.1354 14.5625 9.5 14.7344C8.86458 14.9062 8.19792 14.9948 7.5 15ZM7.5 1C6.90104 1 6.32552 1.07812 5.77344 1.23438C5.22135 1.39062 4.70573 1.60938 4.22656 1.89062C3.7474 2.17188 3.30729 2.51042 2.90625 2.90625C2.50521 3.30208 2.16667 3.73958 1.89062 4.21875C1.61458 4.69792 1.39583 5.21615 1.23438 5.77344C1.07292 6.33073 0.994792 6.90625 1 7.5C1 8.09375 1.07812 8.66667 1.23438 9.21875C1.39062 9.77083 1.60938 10.2891 1.89062 10.7734C2.17188 11.2578 2.51042 11.6979 2.90625 12.0938C3.30208 12.4896 3.73958 12.8281 4.21875 13.1094C4.69792 13.3906 5.21615 13.6094 5.77344 13.7656C6.33073 13.9219 6.90625 14 7.5 14C8.09375 14 8.66667 13.9219 9.21875 13.7656C9.77083 13.6094 10.2891 13.3906 10.7734 13.1094C11.2578 12.8281 11.6979 12.4896 12.0938 12.0938C12.4896 11.6979 12.8281 11.2604 13.1094 10.7812C13.3906 10.3021 13.6094 9.78385 13.7656 9.22656C13.9219 8.66927 14 8.09375 14 7.5C14 6.90625 13.9219 6.33333 13.7656 5.78125C13.6094 5.22917 13.3906 4.71094 13.1094 4.22656C12.8281 3.74219 12.4896 3.30208 12.0938 2.90625C11.6979 2.51042 11.2604 2.17188 10.7812 1.89062C10.3021 1.60938 9.78385 1.39062 9.22656 1.23438C8.66927 1.07812 8.09375 1 7.5 1ZM7 6H8V11H7V6ZM7 4H8V5H7V4Z" fill="white"/>
</svg>
`,x=m.d`
${(0,v.g)((t=>t.disclaimer),m.d`
    <a
        href=${t=>t.url}
        target="_blank"
        data-t="${t=>t.telemetryMetadata}"
    >
        <div 
            class="native-ad-disclaimer-container native-ad-disclaimer-container-dynamic-style"
        >
            ${(0,v.g)((t=>t.isHovered),m.d`
                <div class="disclaimer-popup-container">
                    <div class="disclaimer-popup disclaimer-popup-offset disclaimer-popup-dynamic-style">
                        <span class="disclaimer-popup-text">
                            ${t=>t.disclaimer}
                        </span>
                    </div>
                    <div class="disclaimer-popup-arrow">
                        ${f}
                    </div>
                </div>
            `)}
            <div 
                title="${t=>t.disclaimerTooltip}"
                @mouseenter=${t=>t.updateDisclaimerHoverState(!0)}
                @mouseleave=${t=>t.updateDisclaimerHoverState(!1)}
            >
                ${b}
            </div>
        </div>
    </a>
`)}
`;let y=class extends d{};y=(0,a.gn)([(0,c.M)({name:"msn-native-ad-disclaimer",template:x,styles:u})],y);var C=i(90351),w=i(53212);const $=t=>{const e=null==t?void 0:t.adChoiceIconUrl,i=(null==t?void 0:t.isAdFeedbackV1Enabled)&&(null==t?void 0:t.feedbackUrl);return e||i?e&&i?2:1:0},k=t=>m.d`
    <msn-native-ad-disclaimer 
        ${(0,w.lq)(!0,!1)}
        disclaimer=${t=>t.assets&&t.assets.disclaimer}
        disclaimer-tooltip=${t=>(0,C.Z)(t.localizedStrings,"nativeAdDisclaimerText")}
        popup-margin=${t=>(t=>2===$(t)?103:1===$(t)?70:35)(t)}
        :layoutConfig=${e=>null==t?void 0:t.layout}
        url=${t=>t.destinationUrl}
        tel-metadata=${t=>{var e,i;return null===(i=null===(e=null==t?void 0:t.adTelemetryContext)||void 0===e?void 0:e.destination)||void 0===i?void 0:i.getMetadataTag()}}
		component-name="${null==t?void 0:t.name}"
    >
    </msn-native-ad-disclaimer>
`},3590:function(t,e,i){i.d(e,{g:function(){return r}});var a=i(33940),o=i(65620),n=i(84446);class r extends n.F{constructor(){super(...arguments),this.customStyle=""}}(0,a.gn)([o.Lj],r.prototype,"data",void 0),(0,a.gn)([(0,o.Lj)({mode:"boolean",attribute:"is-info-pane"})],r.prototype,"isInfoPane",void 0),(0,a.gn)([o.Lj],r.prototype,"isExpanded",void 0),(0,a.gn)([(0,o.Lj)({attribute:"custom-style"})],r.prototype,"customStyle",void 0)},66286:function(t,e,i){i.d(e,{SQ:function(){return a},de:function(){return n},oA:function(){return o}});const a={defaultDarkThemeColor:"var(--neutral-foreground-rest)",defaultLightThemeColor:"var(--neutral-foreground-rest)",defaultInfoPaneColor:"var(--neutral-foreground-rest)"},o=t=>t?a.defaultInfoPaneColor:a.defaultDarkThemeColor,n=t=>t?a.defaultInfoPaneColor:a.defaultLightThemeColor},1418:function(t,e,i){i.d(e,{G:function(){return C}});var a=i(33940),o=i(89346),n=i(65620),r=i(26415),s=i(84446),l=i(92773);let d=class extends s.F{constructor(){super(...arguments),this.color="#036AC4",this.fontFamily="inherit"}};(0,a.gn)([n.Lj],d.prototype,"color",void 0),(0,a.gn)([(0,n.Lj)({attribute:"font-family"})],d.prototype,"fontFamily",void 0),(0,a.gn)([n.Lj],d.prototype,"icon",void 0),(0,a.gn)([n.Lj],d.prototype,"data",void 0),d=(0,a.gn)([(0,l.uj)(r.EoX,"decoration-free-shipping-button")],d);var c=i(39181),p=i(13988);let g=class extends o.H{constructor(){super(...arguments),this.color="#036AC4",this.paddingVertical="0px",this.paddingHorizontal="9px",this.borderRadius="4px"}};(0,a.gn)([n.Lj],g.prototype,"color",void 0),(0,a.gn)([n.Lj],g.prototype,"height",void 0),(0,a.gn)([(0,n.Lj)({attribute:"padding-vertical"})],g.prototype,"paddingVertical",void 0),(0,a.gn)([(0,n.Lj)({attribute:"padding-horizontal"})],g.prototype,"paddingHorizontal",void 0),(0,a.gn)([(0,n.Lj)({attribute:"border-radius"})],g.prototype,"borderRadius",void 0),g=(0,a.gn)([(0,l.uj)(r.EoX,"color-button")],g);var h=i(53046),u=i(67620);const m=h.i`

    .color-button-container {
        border-radius: 4px;
        text-align: center;
        display: inline-block;       
    }


`.withBehaviors(new u.j(["color","paddingVertical","paddingHorizontal","borderRadius","height"],(t=>h.i`
                .color-button-container {
                    background: ${t.color};
                    padding: ${t.paddingVertical} ${t.paddingHorizontal} ${t.paddingVertical} ${t.paddingHorizontal};
                    border-radius: ${t.borderRadius};
                    height: ${t.height};
                }
            `))),v=c.d`
    <div class="color-button-container">
        <slot name="icon-section"></slot>
        <slot name="text-section"></slot>
    </div>
`;let f=class extends g{};f=(0,a.gn)([(0,o.M)({name:"color-button",template:v,styles:m})],f);const b=c.d`
    <color-button color="${t=>t.color}" height="22px">
        ${(0,p.g)((t=>t.icon),c.d`
            <span slot="icon-section" class="freeshipping-icon">
                <pure-icon icon-name="${t=>t.icon}" icon-width="16" icon-height="12" />
            </span>
        `)}
        <span slot="text-section">
            <pure-text 
                content="${t=>t.data}"
                custom-style="height: 28px; line-height: 20px; font-weight: 600; font-size: 16px"
                font-family="${t=>t.fontFamily}"
            />      
        </span>
    </color-button>
`;var x=i(78562);const y=h.i`
    .freeshipping-icon {
        margin-right: 3px;
    }
`.withBehaviors(new x.g("layoutStyle"));let C=class extends d{};C=(0,a.gn)([(0,o.M)({name:"decoration-free-shipping-button",template:b,styles:y})],C)},22460:function(t,e,i){i.d(e,{o:function(){return c}});var a=i(33940),o=i(3590),n=i(89346),r=i(39181),s=i(74220),l=i(66286);s.L;const d=r.d`
    <pure-text
        content="${t=>t.data}"
        custom-style="font-size: 16px"
        light-theme-color=${t=>(0,l.de)(t.isInfoPane)}
        dark-theme-color=${t=>(0,l.oA)(t.isInfoPane)}
    />
`;let c=class extends o.g{};c=(0,a.gn)([(0,n.M)({name:"decoration-free-shipping",template:d})],c)},15027:function(t,e,i){i.d(e,{C:function(){return h}});var a=i(33940),o=i(26415),n=i(92773),r=i(3590);let s=class extends r.g{dataChanged(){this.plainText=JSON.parse(this.data)}};s=(0,a.gn)([(0,n.uj)(o.EoX,"decoration-plain-text")],s);var l=i(89346),d=i(39181),c=i(74220),p=i(66286);c.L;const g=d.d`   
    <pure-text 
        content="${t=>t.plainText.displayedText}"
        font-size="16"
        font-weight="400"
        light-theme-color=${t=>(0,p.de)(t.isInfoPane)}
        dark-theme-color=${t=>(0,p.oA)(t.isInfoPane)}
    /> 
`;let h=class extends s{};h=(0,a.gn)([(0,l.M)({name:"decoration-plain-text",template:g})],h)},83529:function(t,e,i){i.d(e,{B:function(){return u}});var a=i(33940),o=i(3590),n=i(65620),r=i(89346),s=i(39181),l=i(13988),d=i(74220),c=i(66286),p=i(51767);d.L,p.D;const g=s.d`
    <div class="special-offer-btn-container">
        <pure-text
            content="${t=>t.data}"
            custom-style="font-size: 12px; font-weight: 600; line-height: 16px; height: 16px;"
            light-theme-color=${t=>(0,c.de)(t.isInfoPane)}
            dark-theme-color=${t=>(0,c.oA)(t.isInfoPane)}
        ></pure-text>
        <pure-icon icon-name="rightArrow" icon-width="4.5" icon-height="8"></pure-icon>
    </div>
    ${(0,l.g)((t=>t.displayExpirationDate),s.d`
        <pure-text
            content="${t=>t.expirationDate}"
            custom-style="font-size: 16px; font-weight: 600; margin-left: 2px;"
            light-theme-color=${t=>(0,c.de)(t.isInfoPane)}
            dark-theme-color=${t=>(0,c.oA)(t.isInfoPane)}
        ></pure-text>
    `)}
`;const h=i(53046).i`
    :host { cursor: pointer }
    .special-offer-btn-container {
        font-size: 12px;
        background: #0078D4;
        padding: 0 8px 2px;
        height: 16px;
        line-height: 16px;
        border-radius: 4px;
        display: inline-block;
        text-align: center;
    }
    
    pure-icon {
        margin-left: 0px;
    }
`;let u=class extends o.g{constructor(){super(...arguments),this.expirationDate="",this.displayExpirationDate=!1}};(0,a.gn)([(0,n.Lj)({attribute:"expiration-date"})],u.prototype,"expirationDate",void 0),(0,a.gn)([(0,n.Lj)({mode:"boolean",attribute:"display-expiration-date"})],u.prototype,"displayExpirationDate",void 0),u=(0,a.gn)([(0,r.M)({name:"decoration-special-offer",template:g,styles:h})],u)},51767:function(t,e,i){i.d(e,{D:function(){return p}});var a=i(33940),o=i(89346),n=i(65620);class r extends o.H{constructor(){super(...arguments),this.iconName="",this.iconColor=""}}(0,a.gn)([n.Lj],r.prototype,"data",void 0),(0,a.gn)([(0,n.Lj)({attribute:"icon-name"})],r.prototype,"iconName",void 0),(0,a.gn)([(0,n.Lj)({attribute:"icon-width"})],r.prototype,"iconWidth",void 0),(0,a.gn)([(0,n.Lj)({attribute:"icon-height"})],r.prototype,"iconHeight",void 0),(0,a.gn)([(0,n.Lj)({attribute:"icon-color"})],r.prototype,"iconColor",void 0);const s=i(53046).i`
`;var l=i(39181),d=i(13988);const c=l.d`
<template id="pure-icon">
    ${t=>{const{iconWidth:e,iconHeight:i,iconColor:a}=t;return l.d`
            ${(0,d.g)((t=>"check"===t.iconName),((t,e,i)=>l.d`
    <svg fill=${t} width=${e} height=${i} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 12 12" enable-background="new 0 0 12 12" xml:space="preserve">
        <path d="M6,0C2.686,0,0,2.686,0,6s2.686,6,6,6s6-2.686,6-6S9.314,0,6,0z M9.207,5.207l-3.5,3.5&#xA; c-0.39,0.39-1.023,0.39-1.414,0l-1.5-1.5C2.785,7.199,2.776,7.191,2.768,7.182c-0.384-0.397-0.373-1.03,0.025-1.414&#xA; c0.397-0.384,1.03-0.373,1.414,0.025L5,6.586l2.793-2.793c0.008-0.008,0.016-0.017,0.025-0.025c0.397-0.384,1.03-0.373,1.414,0.025&#xA; C9.615,4.19,9.604,4.823,9.207,5.207z" />
    </svg>
`)(a,e,i))}
            ${(0,d.g)((t=>"fullStar"===t.iconName),((t,e)=>l.d`
    <svg width=${t} height=${e} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.52351 0.471551C5.82068 -0.157184 6.6793 -0.157184 6.97646 0.471551L8.39149 3.46535L11.5555 3.94543C12.22 4.04625 12.4853 4.89895 12.0045 5.38833L9.71494 7.71866L10.2554 11.0092C10.3689 11.7002 9.67431 12.2272 9.07998 11.9009L6.24999 10.3474L3.42001 11.9009C2.82569 12.2272 2.13105 11.7002 2.24456 11.0092L2.78504 7.71866L0.495535 5.38833C0.014709 4.89895 0.280035 4.04625 0.94452 3.94543L4.10854 3.46535L5.52351 0.471551Z" fill="url(#paint0_linear)"></path>
        <defs>
            <linearGradient id="paint0_linear" x1="1.9375" y1="1.6875" x2="12.2493" y2="10.9867" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF9900"></stop>
                <stop offset="0.291667" stop-color="#FFB729"></stop>
                <stop offset="1" stop-color="#FFE975"></stop>
                <stop offset="1" stop-color="#FFE975"></stop>
            </linearGradient>
        </defs>
    </svg>
`)(e,i))}
            ${(0,d.g)((t=>"emptyStar"===t.iconName),((t,e)=>l.d`
    <svg width=${t} height=${e} viewBox="0 4 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.27351 4.47155C5.57068 3.84282 6.4293 3.84281 6.72646 4.47155L8.14149 7.46535L11.3055 7.94543C11.97 8.04625 12.2353 8.89895 11.7545 9.38834L9.46494 11.7187L10.0054 15.0091C10.1189 15.7002 9.42431 16.2272 8.82998 15.9009L5.99999 14.3474L3.17001 15.9009C2.57569 16.2272 1.88105 15.7002 1.99456 15.0091L2.53504 11.7187L0.245535 9.38834C-0.235291 8.89895 0.030035 8.04625 0.69452 7.94543L3.85854 7.46535L5.27351 4.47155ZM5.99999 5.05831L4.64478 7.92564C4.52678 8.17531 4.29867 8.34836 4.0348 8.3884L1.00445 8.84819L3.19723 11.0801C3.38817 11.2745 3.4753 11.5544 3.43023 11.8289L2.91258 14.9804L5.62301 13.4924C5.85903 13.3628 6.14095 13.3628 6.37697 13.4924L9.08742 14.9804L8.56978 11.8289C8.52471 11.5544 8.61184 11.2745 8.80273 11.0801L10.9955 8.84819L7.96518 8.3884C7.70132 8.34836 7.47322 8.17531 7.35524 7.92564L5.99999 5.05831Z" fill="url(#paint0_linear)"></path>
        <defs>
            <linearGradient id="paint0_linear" x1="1.6875" y1="5.6875" x2="11.9993" y2="14.9867" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF9900"></stop>
                <stop offset="0.291667" stop-color="#FFB729"></stop>
                <stop offset="1" stop-color="#FFE975"></stop>
                <stop offset="1" stop-color="#FFE975"></stop>
            </linearGradient>
        </defs>
    </svg>
`)(e,i))}
            ${(0,d.g)((t=>"halfStar"===t.iconName),((t,e)=>l.d`
    <svg width=${t} height=${e} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.27351 0.471548C5.57068 -0.15718 6.4293 -0.157186 6.72646 0.471548L8.14149 3.46535L11.3055 3.94543C11.97 4.04625 12.2353 4.89895 11.7545 5.38834L9.46494 7.71866L10.0054 11.0091C10.1189 11.7002 9.42431 12.2272 8.82998 11.9009L5.99999 10.3474L3.17001 11.9009C2.57569 12.2272 1.88105 11.7002 1.99456 11.0091L2.53504 7.71866L0.245535 5.38834C-0.235291 4.89895 0.030035 4.04625 0.69452 3.94543L3.85854 3.46535L5.27351 0.471548ZM5.99999 1.05831L4.64478 3.92564C4.52678 4.17531 4.29867 4.34836 4.0348 4.3884L1.00445 4.84819L3.19723 7.08007C3.38817 7.27445 3.4753 7.55442 3.43023 7.82888L2.91258 10.9804L5.62301 9.49242C5.85903 9.36284 6.14095 9.36284 6.37697 9.49242L9.08742 10.9804L8.56978 7.82888C8.52471 7.55442 8.61184 7.27445 8.80273 7.08007L10.9955 4.84819L7.96518 4.3884C7.70132 4.34836 7.47322 4.17531 7.35524 3.92564L5.99999 1.05831Z"
            fill="url(#paint0_linear)"></path>
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="6" height="12">
            <rect width="6" height="12" fill="#C4C4C4"></rect>
        </mask>
        <g mask="url(#mask0)">
            <path
                d="M5.27351 0.471551C5.4221 0.157183 5.71104 -8.64667e-08 5.99999 0C6.28893 8.6463e-08 6.57788 0.157184 6.72646 0.471551L8.14149 3.46535L11.3055 3.94543C11.97 4.04625 12.2353 4.89895 11.7545 5.38833L9.46494 7.71866L10.0054 11.0092C10.1189 11.7002 9.42431 12.2272 8.82998 11.9009L5.99999 10.3474L3.17001 11.9009C2.57569 12.2272 1.88105 11.7002 1.99456 11.0092L2.53504 7.71866L0.245535 5.38833C-0.235291 4.89895 0.0300351 4.04625 0.69452 3.94543L3.85854 3.46535L5.27351 0.471551Z"
                fill="url(#paint1_linear)"></path>
        </g>
        <defs>
            <linearGradient id="paint0_linear" x1="1.6875" y1="1.6875" x2="11.9993" y2="10.9867"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF9900"></stop>
                <stop offset="0.291667" stop-color="#FFB729"></stop>
                <stop offset="1" stop-color="#FFE975"></stop>
                <stop offset="1" stop-color="#FFE975"></stop>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="1.6875" y1="1.6875" x2="11.9993" y2="10.9867"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF9900"></stop>
                <stop offset="0.291667" stop-color="#FFB729"></stop>
                <stop offset="1" stop-color="#FFE975"></stop>
                <stop offset="1" stop-color="#FFE975"></stop>
            </linearGradient>
        </defs>
    </svg>
`)(e,i))}
            ${(0,d.g)((t=>"halfStarRight"===t.iconName),((t,e)=>l.d`
    <svg width=${t} height=${e} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M6 0C5.71105 -3.2871e-06 5.4221 0.15718 5.27351 0.471548L3.85854 3.46535L0.69452 3.94543C0.030035 4.04625 -0.235291 4.89895 0.245535 5.38834L2.53504 7.71866L1.99456 11.0091C1.88105 11.7002 2.57569 12.2272 3.17001 11.9009L5.99999 10.3474L6 10.3474V9.39523C5.87051 9.39523 5.74102 9.42763 5.62301 9.49242L2.91258 10.9804L3.43023 7.82888C3.4753 7.55442 3.38817 7.27445 3.19723 7.08007L1.00445 4.84819L4.0348 4.3884C4.29867 4.34836 4.52678 4.17531 4.64478 3.92564L5.99999 1.05831L6 1.05833V0Z"
            fill="url(#paint0_linear)" />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M6 10.3474L8.82998 11.9009C9.42431 12.2272 10.1189 11.7002 10.0054 11.0092L9.46494 7.71866L11.7545 5.38833C12.2353 4.89895 11.97 4.04625 11.3055 3.94543L8.14149 3.46535L6.72646 0.471551C6.57788 0.157188 6.28894 4.04894e-06 6 0V10.3474Z"
            fill="url(#paint1_linear)" />
        <defs>
            <linearGradient id="paint0_linear" x1="1.6875" y1="1.6875" x2="11.9993" y2="10.9867"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF9900" />
                <stop offset="0.291667" stop-color="#FFB729" />
                <stop offset="1" stop-color="#FFE975" />
                <stop offset="1" stop-color="#FFE975" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="1.6875" y1="1.68756" x2="11.9996" y2="10.9867"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF9900" />
                <stop offset="0.291667" stop-color="#FFB729" />
                <stop offset="1" stop-color="#FFE975" />
                <stop offset="1" stop-color="#FFE975" />
            </linearGradient>
        </defs>
    </svg>
`)(e,i))}
            ${(0,d.g)((t=>"fullStarDR"===t.iconName),((t,e,i)=>l.d`
    <svg width=${t} height=${e} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill=${i} d="M5.52351 0.471551C5.82068 -0.157184 6.6793 -0.157184 6.97646 0.471551L8.39149 3.46535L11.5555 3.94543C12.22 4.04625 12.4853 4.89895 12.0045 5.38833L9.71494 7.71866L10.2554 11.0092C10.3689 11.7002 9.67431 12.2272 9.07998 11.9009L6.24999 10.3474L3.42001 11.9009C2.82569 12.2272 2.13105 11.7002 2.24456 11.0092L2.78504 7.71866L0.495535 5.38833C0.014709 4.89895 0.280035 4.04625 0.94452 3.94543L4.10854 3.46535L5.52351 0.471551Z"></path>
    </svg>
`)(e,i,a))}
            ${(0,d.g)((t=>"emptyStarDR"===t.iconName),((t,e,i)=>l.d`
    <svg width=${t} height=${e} viewBox="0 4 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill=${i} d="M5.27351 4.47155C5.57068 3.84282 6.4293 3.84281 6.72646 4.47155L8.14149 7.46535L11.3055 7.94543C11.97 8.04625 12.2353 8.89895 11.7545 9.38834L9.46494 11.7187L10.0054 15.0091C10.1189 15.7002 9.42431 16.2272 8.82998 15.9009L5.99999 14.3474L3.17001 15.9009C2.57569 16.2272 1.88105 15.7002 1.99456 15.0091L2.53504 11.7187L0.245535 9.38834C-0.235291 8.89895 0.030035 8.04625 0.69452 7.94543L3.85854 7.46535L5.27351 4.47155ZM5.99999 5.05831L4.64478 7.92564C4.52678 8.17531 4.29867 8.34836 4.0348 8.3884L1.00445 8.84819L3.19723 11.0801C3.38817 11.2745 3.4753 11.5544 3.43023 11.8289L2.91258 14.9804L5.62301 13.4924C5.85903 13.3628 6.14095 13.3628 6.37697 13.4924L9.08742 14.9804L8.56978 11.8289C8.52471 11.5544 8.61184 11.2745 8.80273 11.0801L10.9955 8.84819L7.96518 8.3884C7.70132 8.34836 7.47322 8.17531 7.35524 7.92564L5.99999 5.05831Z"></path>
    </svg>
`)(e,i,a))}
            ${(0,d.g)((t=>"halfStarDR"===t.iconName),((t,e,i)=>l.d`
    <svg width=${t} height=${e} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.27351 0.471548C5.57068 -0.15718 6.4293 -0.157186 6.72646 0.471548L8.14149 3.46535L11.3055 3.94543C11.97 4.04625 12.2353 4.89895 11.7545 5.38834L9.46494 7.71866L10.0054 11.0091C10.1189 11.7002 9.42431 12.2272 8.82998 11.9009L5.99999 10.3474L3.17001 11.9009C2.57569 12.2272 1.88105 11.7002 1.99456 11.0091L2.53504 7.71866L0.245535 5.38834C-0.235291 4.89895 0.030035 4.04625 0.69452 3.94543L3.85854 3.46535L5.27351 0.471548ZM5.99999 1.05831L4.64478 3.92564C4.52678 4.17531 4.29867 4.34836 4.0348 4.3884L1.00445 4.84819L3.19723 7.08007C3.38817 7.27445 3.4753 7.55442 3.43023 7.82888L2.91258 10.9804L5.62301 9.49242C5.85903 9.36284 6.14095 9.36284 6.37697 9.49242L9.08742 10.9804L8.56978 7.82888C8.52471 7.55442 8.61184 7.27445 8.80273 7.08007L10.9955 4.84819L7.96518 4.3884C7.70132 4.34836 7.47322 4.17531 7.35524 3.92564L5.99999 1.05831Z"
            fill=${i}></path>
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="6" height="12">
            <rect width="6" height="12" fill="#C4C4C4"></rect>
        </mask>
        <g mask="url(#mask0)">
            <path
                d="M5.27351 0.471551C5.4221 0.157183 5.71104 -8.64667e-08 5.99999 0C6.28893 8.6463e-08 6.57788 0.157184 6.72646 0.471551L8.14149 3.46535L11.3055 3.94543C11.97 4.04625 12.2353 4.89895 11.7545 5.38833L9.46494 7.71866L10.0054 11.0092C10.1189 11.7002 9.42431 12.2272 8.82998 11.9009L5.99999 10.3474L3.17001 11.9009C2.57569 12.2272 1.88105 11.7002 1.99456 11.0092L2.53504 7.71866L0.245535 5.38833C-0.235291 4.89895 0.0300351 4.04625 0.69452 3.94543L3.85854 3.46535L5.27351 0.471551Z"
                fill=${i}></path>
        </g>
    </svg>
`)(e,i,a))}
            ${(0,d.g)((t=>"halfStarRightDR"===t.iconName),((t,e,i)=>l.d`
    <svg width=${t} height=${e} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M6 0C5.71105 -3.2871e-06 5.4221 0.15718 5.27351 0.471548L3.85854 3.46535L0.69452 3.94543C0.030035 4.04625 -0.235291 4.89895 0.245535 5.38834L2.53504 7.71866L1.99456 11.0091C1.88105 11.7002 2.57569 12.2272 3.17001 11.9009L5.99999 10.3474L6 10.3474V9.39523C5.87051 9.39523 5.74102 9.42763 5.62301 9.49242L2.91258 10.9804L3.43023 7.82888C3.4753 7.55442 3.38817 7.27445 3.19723 7.08007L1.00445 4.84819L4.0348 4.3884C4.29867 4.34836 4.52678 4.17531 4.64478 3.92564L5.99999 1.05831L6 1.05833V0Z"
            fill=${i} />
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M6 10.3474L8.82998 11.9009C9.42431 12.2272 10.1189 11.7002 10.0054 11.0092L9.46494 7.71866L11.7545 5.38833C12.2353 4.89895 11.97 4.04625 11.3055 3.94543L8.14149 3.46535L6.72646 0.471551C6.57788 0.157188 6.28894 4.04894e-06 6 0V10.3474Z"
            fill=${i} />
    </svg>
`)(e,i,a))}
            ${(0,d.g)((t=>"shadowStar"===t.iconName),((t,e,i)=>l.d`
    <svg width=${t} height=${e} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill=${i} d="M16 1L12.459 12.459H0.999998L10.2705 19.541L6.72949 31L16 23.918L25.2493 31L21.7295 19.541L31 12.459H19.541L16 1Z" />
        <g opacity="0.25">
            <path d="M15.9639 17.5773V1L12.4611 12.4507L15.9639 17.5773L0.999998 12.4507L10.2493 19.5493L15.9639 17.5773L6.71045 31L16 23.9014L15.9639 17.5773L25.2493 31L21.7105 19.5493L15.9639 17.5773L31 12.4507H19.4987L15.9639 17.5773Z" fill="black"/>
            <path d="M15.9639 17.5773V1L12.4611 12.4507L15.9639 17.5773ZM15.9639 17.5773L6.71045 31L16 23.9014L15.9639 17.5773ZM15.9639 17.5773L0.999999 12.4507L10.2493 19.5493L15.9639 17.5773ZM15.9639 17.5773L25.2493 31L21.7105 19.5493L15.9639 17.5773ZM15.9639 17.5773L31 12.4507H19.4987L15.9639 17.5773Z" stroke="black" stroke-width="0.0841596"/>
        </g>
    </svg>
`)(e,i,a))}
            ${(0,d.g)((t=>"location"===t.iconName),((t,e,i,a,o)=>l.d`
    <style>
        @media (prefers-color-scheme: dark) {
            path {
                fill: ${o};
            }
        }
        @media (prefers-color-scheme: light) {
            path {
                fill: ${a};
            }
        }
    </style>
    <svg width=${t} height=${e} viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill=${i} d="M9.38909 11.6701L8.63932 12.4338C8.08675 12.9924 7.36969 13.7106 6.48803 14.5885C5.93704 15.1372 5.06295 15.1371 4.51208 14.5884L2.30692 12.3792C2.02977 12.0989 1.79778 11.8626 1.61091 11.6701C-0.536971 9.45796 -0.536971 5.87129 1.61091 3.65913C3.7588 1.44696 7.24121 1.44696 9.38909 3.65913C11.537 5.87129 11.537 9.45796 9.38909 11.6701ZM7.07926 7.84334C7.07926 6.94501 6.37218 6.21679 5.49999 6.21679C4.6278 6.21679 3.92074 6.94501 3.92074 7.84334C3.92074 8.74163 4.6278 9.46986 5.49999 9.46986C6.37218 9.46986 7.07926 8.74163 7.07926 7.84334Z" fill="white"></path>
    </svg>
`)(e,i,a,"#717171","white"))}
            ${(0,d.g)((t=>"rightArrow"===t.iconName),((t,e)=>l.d`
    <svg width=${t} height=${e} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.35179 6L1.10623 1.63651C0.961802 1.48807 0.965054 1.25065 1.11349 1.10623C1.26193 0.961801 1.49935 0.965053 1.64377 1.11349L6.14377 5.73849C6.28541 5.88406 6.28541 6.11594 6.14377 6.26151L1.64377 10.8865C1.49935 11.0349 1.26193 11.0382 1.11349 10.8938C0.965054 10.7493 0.961802 10.5119 1.10623 10.3635L5.35179 6Z" fill="white" stroke="white" stroke-width="0.4"/>
    </svg>
`)(e,i))}
            ${(0,d.g)((t=>"cube"===t.iconName),((t,e,i)=>l.d`
<svg width=${t} height=${e} viewBox="0 0 58 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill=${i} fill-rule="evenodd" clip-rule="evenodd" d="M36.2122 0.827427L56.9267 12.2204C57.2516 12.3991 57.5225 12.6618 57.7113 12.981C57.9 13.3001 57.9996 13.6641 57.9997 14.035V40.9637C57.9996 41.3345 57.9 41.6985 57.7113 42.0177C57.5225 42.3369 57.2516 42.5996 56.9267 42.7783L36.2122 54.1712C35.9065 54.3399 35.563 54.4283 35.2138 54.4283C34.8646 54.4283 34.5211 54.3399 34.2154 54.1712L24.8566 49.0237L26.8535 45.3966L33.1424 48.8559V26.6521L13.5009 15.8495C13.1762 15.6707 12.9053 15.408 12.7167 15.0888C12.5281 14.7697 12.4286 14.4057 12.4286 14.035C12.4286 13.6642 12.5281 13.3002 12.7167 12.9811C12.9053 12.6619 13.1762 12.3992 13.5009 12.2204L34.2154 0.827427C34.5212 0.659157 34.8647 0.570923 35.2138 0.570923C35.5629 0.570923 35.9064 0.659157 36.2122 0.827427ZM51.63 14.035L35.2138 5.0076L18.7976 14.035L35.2138 23.0623L51.63 14.035ZM37.2852 48.8538L53.8568 39.7395V17.5357L37.2852 26.65V48.8538ZM0 27.4995H16.5715V23.3566H0V27.4995ZM20.7144 44.071H4.14286V39.9281H20.7144V44.071ZM8.28571 35.7852H24.8573V31.6424H8.28571V35.7852Z"/>
</svg>
`)(e,i,"#FFFFFF"))}
            ${(0,d.g)((t=>"box"===t.iconName),((t,e,i)=>l.d`
<svg width=${t} height=${e} viewBox="0 0 59 63" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.6526 3.74097C27.5277 3.25501 28.5121 3 29.5131 3C30.514 3 31.4985 3.25501 32.3736 3.74097L54.512 16.0372C54.971 16.2924 55.3534 16.6657 55.6196 17.1184C55.8858 17.5711 56.0262 18.0867 56.0262 18.6119V42.8714C56.0259 43.922 55.7447 44.9535 55.2118 45.8589C54.6788 46.7643 53.9134 47.5107 52.9949 48.0208L32.3736 59.4803C31.4985 59.9663 30.514 60.2213 29.5131 60.2213C28.5121 60.2213 27.5277 59.9663 26.6526 59.4803L6.03133 48.0208C5.11326 47.5109 4.34814 46.765 3.81517 45.8601C3.28221 44.9553 3.00077 43.9244 3 42.8743V18.6119C2.99998 18.0867 3.14035 17.5711 3.40658 17.1184C3.67281 16.6657 4.05521 16.2924 4.51419 16.0372L26.6556 3.74097H26.6526Z" stroke=${i} stroke-width="4.08717" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.2549 9.5144L42.768 24.2439V34.5545" stroke=${i} stroke-width="4.08717" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.8369 32.5757L20.6746 37.5012" stroke=${i}" stroke-width="4.08717" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M29.5131 31.6089V59.5949M3 16.8794L29.5131 31.6089L3 16.8794ZM29.5131 31.6089L56.0262 16.8794L29.5131 31.6089Z" stroke=${i} stroke-width="4.08717" stroke-linejoin="round"/>
</svg>
`)(e,i,"#FFFFFF"))}
            ${(0,d.g)((t=>"truck"===t.iconName),((t,e,i)=>l.d`
<svg width=${t} height=${e} viewBox="0 0 62 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill=${i} d="M49.0667 9.2H42.9333V6.13333C42.9333 4.50667 42.2871 2.94663 41.1369 1.79641C39.9867 0.646188 38.4267 0 36.8 0H6.13333C4.50667 0 2.94663 0.646188 1.79641 1.79641C0.646188 2.94663 0 4.50667 0 6.13333V36.8H6.13333C6.13333 38.0082 6.3713 39.2045 6.83364 40.3207C7.29599 41.4369 7.97365 42.4511 8.82795 43.3054C9.68225 44.1597 10.6965 44.8373 11.8126 45.2997C12.9288 45.762 14.1252 46 15.3333 46C16.5415 46 17.7378 45.762 18.854 45.2997C19.9702 44.8373 20.9844 44.1597 21.8387 43.3054C22.693 42.4511 23.3707 41.4369 23.833 40.3207C24.2954 39.2045 24.5333 38.0082 24.5333 36.8H36.8C36.8 39.24 37.7693 41.58 39.4946 43.3054C41.22 45.0307 43.56 46 46 46C48.44 46 50.7801 45.0307 52.5054 43.3054C54.2307 41.58 55.2 39.24 55.2 36.8H61.3333V21.4667L49.0667 9.2ZM15.3333 41.4C14.7291 41.3998 14.1307 41.2806 13.5725 41.0491C13.0143 40.8177 12.5072 40.4786 12.08 40.0512C11.6529 39.6237 11.3141 39.1163 11.083 38.558C10.852 37.9996 10.7331 37.4012 10.7333 36.7969C10.7335 36.1927 10.8528 35.5943 11.0842 35.0361C11.3156 34.4779 11.6547 33.9708 12.0822 33.5436C12.5096 33.1165 13.017 32.7777 13.5754 32.5466C14.1337 32.3156 14.7321 32.1967 15.3364 32.1969C16.5568 32.1973 17.7271 32.6825 18.5897 33.5458C19.4524 34.409 19.9368 35.5796 19.9364 36.8C19.936 38.0204 19.4508 39.1907 18.5876 40.0533C17.7243 40.916 16.5537 41.4004 15.3333 41.4ZM6.13333 27.6V6.13333H36.8V27.6H6.13333ZM46 41.4C45.3957 41.3998 44.7974 41.2806 44.2392 41.0491C43.681 40.8177 43.1738 40.4786 42.7467 40.0512C42.3195 39.6237 41.9807 39.1163 41.7497 38.558C41.5186 37.9996 41.3998 37.4012 41.4 36.7969C41.4002 36.1927 41.5194 35.5943 41.7509 35.0361C41.9823 34.4779 42.3214 33.9708 42.7488 33.5436C43.1763 33.1165 43.6837 32.7777 44.242 32.5466C44.8004 32.3156 45.3988 32.1967 46.0031 32.1969C47.2235 32.1973 48.3937 32.6825 49.2564 33.5458C50.1191 34.409 50.6035 35.5796 50.6031 36.8C50.6027 38.0204 50.1175 39.1907 49.2542 40.0533C48.391 40.916 47.2204 41.4004 46 41.4Z"/>
</svg>
`)(e,i,"#FFFFFF"))}
        `}}
</template>
`;let p=class extends r{};p=(0,a.gn)([(0,o.M)({name:"pure-icon",template:c,styles:s})],p)},74220:function(t,e,i){i.d(e,{L:function(){return v}});var a=i(33940),o=i(89346),n=i(65620),r=i(26415),s=i(66286),l=i(92773);let d=class extends o.H{constructor(){super(...arguments),this.content="",this.customStyle="",this.fontFamily="inherit",this.fontSize="14",this.fontWeight="600",this.textColor="#FFFFFF",this.darkThemeColor=s.SQ.defaultDarkThemeColor,this.lightThemeColor=s.SQ.defaultLightThemeColor}};(0,a.gn)([n.Lj],d.prototype,"content",void 0),(0,a.gn)([(0,n.Lj)({attribute:"custom-style"})],d.prototype,"customStyle",void 0),(0,a.gn)([(0,n.Lj)({attribute:"font-family"})],d.prototype,"fontFamily",void 0),(0,a.gn)([(0,n.Lj)({attribute:"font-size"})],d.prototype,"fontSize",void 0),(0,a.gn)([(0,n.Lj)({attribute:"font-weight"})],d.prototype,"fontWeight",void 0),(0,a.gn)([(0,n.Lj)({attribute:"text-color"})],d.prototype,"textColor",void 0),(0,a.gn)([(0,n.Lj)({attribute:"dark-theme-color"})],d.prototype,"darkThemeColor",void 0),(0,a.gn)([(0,n.Lj)({attribute:"light-theme-color"})],d.prototype,"lightThemeColor",void 0),d=(0,a.gn)([(0,l.uj)(r.EoX,"pure-text")],d);var c=i(53046),p=i(67620);const g=c.i`
    .pure-text-container {
        display: inline-block;
        height: 20px;
        line-height: 20px;
    }

`.withBehaviors(new p.j(["fontFamily","fontSize","fontWeight","textColor"],(t=>c.i`
                .pure-text-container  {
                    font-family: ${t.fontFamily};
                    font-size: ${t.fontSize}px;
                    font-weight: ${t.fontWeight};
                    color: ${t.textColor};
                }
            `)));var h=i(39181),u=i(13988);const m=h.d`
    ${(0,u.g)((t=>t.darkThemeColor),h.d`
        <style>
            @media (prefers-color-scheme: dark) {
                .pure-text-container {
                    color: ${t=>t.darkThemeColor};
                }
            }
        </style>
    `)}
    ${(0,u.g)((t=>t.lightThemeColor),h.d`
        <style>
            @media (prefers-color-scheme: light) {
                .pure-text-container {
                    color: ${t=>t.lightThemeColor};
                }
            }
        </style>
    `)}
    <div class="pure-text-container" style=${t=>t.customStyle}>${t=>t.content}</div>
`;let v=class extends d{};v=(0,a.gn)([(0,o.M)({name:"pure-text",template:m,styles:g})],v)},48912:function(t,e,i){i.d(e,{e:function(){return v}});var a=i(14609),o=i(33940),n=i(65620),r=i(84446),s=i(26415),l=i(92773);let d=class extends r.F{constructor(){super(...arguments),this.faviconText="",this.landingPage=""}};(0,o.gn)([(0,n.Lj)({attribute:"favicon-text"})],d.prototype,"faviconText",void 0),(0,o.gn)([(0,n.Lj)({attribute:"landing-page"})],d.prototype,"landingPage",void 0),(0,o.gn)([(0,n.Lj)({attribute:"tel-metadata"})],d.prototype,"telemetryMetadata",void 0),d=(0,o.gn)([(0,l.uj)(s.EoX,"msn-native-ad-favicon")],d);var c=i(89346),p=i(53046),g=i(78562);const h=p.i`

.native-ad-favicon-wrapper {
    width: 16px;
    height: 16px;
    background: #F2F2F2;
    border-radius: 4px;
    align-items: center;
    text-align: center;
    justify-content: center;
    display: flex;
}

.native-ad-favicon-text {
    color: #4D1C3A;
    font-size: 12px;
    width: 100%;
    height: 100%;
    text-decoration: none;
}
`.withBehaviors(new g.g("layoutStyle"));const u=i(39181).d`
    <div class="native-ad-favicon-wrapper">
        <a
            class="native-ad-favicon-text"
            href=${t=>t.landingPage}
            data-t="${t=>t.telemetryMetadata}"
        >
            ${t=>t.faviconText}
        </a>
    </div>
`;class m extends d{}const v=(0,a.Z)((()=>{(0,c.M)({name:"msn-native-ad-favicon",template:u,styles:h,shadowOptions:{delegatesFocus:!0}})(m)}))},64789:function(t,e,i){i.d(e,{A:function(){return w}});var a=i(33940),o=i(67121),n=i(65620),r=i(87697),s=i(84446),l=i(26415),d=i(92773);let c=class extends s.F{constructor(){super(...arguments),this.effectId="",this.intersectionRootMargin="-350px 0px -200px 0px",this.isAnimationValid=!1,this.starType="",this.isStaticMode=!1,this.updateAnimStatus=(t,e)=>{this.isAnimationValid!==t&&(this.isAnimationValid=t,t&&e&&setTimeout((()=>{e()}),0))}}connectedCallback(){if(super.connectedCallback(),!this.isStaticMode){this.effectGroup=o.am.getEffectGroup();const t={root:this.intersectionRoot,rootMargin:this.intersectionRootMargin};this.effectGroup.register(this.effectId,this.highlightingRatingContainer,this.updateAnimStatus,t,!0,0)}}disconnectedCallback(){super.disconnectedCallback(),this.effectGroup&&this.effectGroup.unregister(this.effectId)}};(0,a.gn)([(0,n.Lj)({attribute:"rating"})],c.prototype,"rating",void 0),(0,a.gn)([n.Lj],c.prototype,"effectId",void 0),(0,a.gn)([n.Lj],c.prototype,"intersectionRoot",void 0),(0,a.gn)([n.Lj],c.prototype,"intersectionRootMargin",void 0),(0,a.gn)([r.LO],c.prototype,"isAnimationValid",void 0),(0,a.gn)([n.Lj],c.prototype,"starType",void 0),(0,a.gn)([(0,n.Lj)({mode:"boolean",attribute:"isStaticMode"})],c.prototype,"isStaticMode",void 0),c=(0,a.gn)([(0,d.uj)(l.EoX,"msn-native-ad-highlight-rating")],c);var p=i(89346),g=i(53046),h=i(67620),u=i(78562);const m=g.i`

.stars-container{
    display: flex;
    justify-content: center;
    gap: 8px;
}

.animated-star1{
    animation: fadeIn 300ms;
}

.animated-star2{
    animation: fadeIn 360ms;
}

.animated-star3{
    animation: fadeIn 420ms;
}

.animated-star4{
    animation: fadeIn 480ms;
}

.animated-star5{
    animation: fadeIn 540ms;
}

.star1, .star2, .star3, .star4, .star5{
   opacity: 1;
}

@keyframes fadeIn{
    0% {
        opacity: 0;
        -webkit-transform: translate(0,30px); /* Safari */
        transform: translate(0,30px); 
    }
    80% {
        opacity:1;
        -webkit-transform: translate(0,-10px); /* Safari */
        transform: translate(0,-10px); 
    }
    100% {
        opacity:1;
        -webkit-transform: translate(0,0px); /* Safari */
        transform: translate(0,0px); 
    }
}
`.withBehaviors(new u.g("layoutStyle"),new h.j(["isStaticMode"],(t=>{let e="";return t.isStaticMode&&(e+=".star1, .star2, .star3, .star4, .star5{\n                    opacity: 1;\n                 }"),g.i`${e}`})));var v=i(39181),f=i(58952),b=i(13988),x=i(45560);const y=v.d`
<div class="stars-container" ${(0,f.i)("highlightingRatingContainer")}>
    <div class="${t=>t.isAnimationValid?"animated-star1":"star1"}" style="${t=>"rtl"===document.dir?"transform:rotateY(180deg)":""}"> 
        ${t=>C(t.rating,t.starType)}
    </div>
    <div class="${t=>t.isAnimationValid?"animated-star2":"star2"}" style="${t=>"rtl"===document.dir?"transform:rotateY(180deg)":""}"> 
        ${t=>C(t.rating-2,t.starType)}
    </div>
    <div class="${t=>t.isAnimationValid?"animated-star3":"star3"}" style="${t=>"rtl"===document.dir?"transform:rotateY(180deg)":""}"> 
        ${t=>C(t.rating-4,t.starType)}
    </div>
    <div class="${t=>t.isAnimationValid?"animated-star4":"star4"}" style="${t=>"rtl"===document.dir?"transform:rotateY(180deg)":""}"> 
        ${t=>C(t.rating-6,t.starType)}
    </div>
    <div class="${t=>t.isAnimationValid?"animated-star5":"star5"}" style="${t=>"rtl"===document.dir?"transform:rotateY(180deg)":""}"> 
        ${t=>C(t.rating-8,t.starType)}
    </div>
<div>
`,C=(t,e)=>v.d`
    ${(0,b.g)((e=>t-2>=0),(0,x.T7)(e))}
    ${(0,b.g)((e=>t-2<0),v.d`
        ${(0,b.g)((e=>t-1>=0),(0,x.NP)(e))}
        ${(0,b.g)((e=>t-1<0),v.d`
            ${(0,b.g)((e=>t-1<0),(0,x.IB)(e))}
        `)}
    `)}  
`;let w=class extends c{};w=(0,a.gn)([(0,p.M)({name:"msn-native-ad-highlight-rating",template:y,styles:m,shadowOptions:{delegatesFocus:!0}})],w)},45560:function(t,e,i){i.d(e,{fx:function(){return c},IB:function(){return h},NP:function(){return g},T7:function(){return p}});var a=i(39181);const o=a.d`
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.0627 1.25747C14.8552 -0.419156 17.1448 -0.419156 17.9372 1.25747L21.7106 9.24093L30.148 10.5211C31.9199 10.79 32.6274 13.0639 31.3453 14.3689L25.2398 20.5831L26.6812 29.3579C26.9838 31.2006 25.1315 32.6059 23.5466 31.7359L16 27.593L8.45337 31.7359C6.8685 32.6059 5.01614 31.2006 5.31883 29.3579L6.76011 20.5831L0.65476 14.3689C-0.627443 13.0639 0.0800934 10.79 1.85205 10.5211L10.2894 9.24093L14.0627 1.25747Z" fill="url(#paint0_linear)"/>
        <defs>
            <linearGradient id="paint0_linear" x1="0" y1="16" x2="32" y2="16" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF512F"/>
                <stop offset="1" stop-color="#DD2476"/>
            </linearGradient>
        </defs>
</svg>  
`,n=a.d`
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.0014 4.79517e-07C15.2304 -0.000517523 14.4592 0.418646 14.0627 1.25746L10.2894 9.24092L1.85205 10.5211C0.0800935 10.79 -0.627443 13.0638 0.65476 14.3689L6.76011 20.5831L5.31883 29.3577C5.07924 30.8164 6.18983 32.0008 7.44924 32C7.78192 32.0002 8.12506 31.9178 8.45651 31.7358L16.0016 27.5938L23.5466 31.7358C25.1315 32.6059 26.9838 31.2006 26.6812 29.3577L25.2398 20.5831L31.3453 14.3689C32.6274 13.0638 31.9199 10.79 30.148 10.5211L21.7106 9.24092L17.9372 1.25746C17.5415 0.420067 16.7711 0.000919515 16.0014 4.79517e-07C16.0011 4.79517e-07 16.0017 4.79517e-07 16.0014 4.79517e-07ZM16.0025 25.0539V2.82752L19.614 10.4684C19.9286 11.1341 20.5368 11.5956 21.2405 11.7024L29.3214 12.9285L23.474 18.8802C22.9649 19.3985 22.7326 20.1451 22.8527 20.877L24.2331 29.281L17.0053 25.3131C16.6914 25.1408 16.3471 25.0544 16.0025 25.0539Z" fill="url(#paint0_linear)"/>
        <defs>
            <linearGradient id="paint0_linear" x1="0" y1="16" x2="32" y2="16" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF512F"/>
                <stop offset="1" stop-color="#DD2476"/>
            </linearGradient>
        </defs>
</svg>
`,r=a.d`
<svg width=32 height=32 viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.15,10.52,21.71,9.24l-3.77-8a2.12,2.12,0,0,0-3.88,0l-3.77,8L1.85,10.52a2.29,2.29,0,0,0-1.2,3.85l6.11,6.21L5.32,29.36A2.23,2.23,0,0,0,7.45,32a2.11,2.11,0,0,0,1-.26L16,27.59l7.55,4.15a2.18,2.18,0,0,0,3.13-2.38l-1.44-8.78,6.11-6.21A2.29,2.29,0,0,0,30.15,10.52Zm-6.68,8.36a2.33,2.33,0,0,0-.62,2l1.38,8.4-7.22-4a2.14,2.14,0,0,0-1-.26,2.1,2.1,0,0,0-1,.26l-7.23,4,1.38-8.4a2.33,2.33,0,0,0-.62-2L2.68,12.93l8.08-1.23a2.15,2.15,0,0,0,1.63-1.23L16,2.83l3.61,7.64a2.18,2.18,0,0,0,1.63,1.23l8.08,1.23Z" fill="url(#paint0_linear)"/>
            <linearGradient id="paint0_linear" x1="0" y1="16" x2="32" y2="16" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF512F"/>
                <stop offset="1" stop-color="#DD2476"/>
            </linearGradient>
        </defs>
</svg>
`,s=a.d`
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.3049 1.10028C12.9983 -0.366762 15.0017 -0.366762 15.6951 1.10028L18.9968 8.08581L26.3795 9.206C27.9299 9.44126 28.549 11.4309 27.4271 12.5728L22.0849 18.0102L23.346 25.6882C23.6108 27.3006 21.9901 28.5302 20.6033 27.7689L14 24.1439L7.3967 27.7689C6.00993 28.5302 4.38912 27.3006 4.65397 25.6882L5.9151 18.0102L0.572915 12.5728C-0.549012 11.4309 0.0700817 9.44126 1.62055 9.206L9.00326 8.08581L12.3049 1.10028Z" fill="url(#paint0_linear_75_17843)"/>
    <defs>
        <linearGradient id="paint0_linear_75_17843" x1="14" y1="0" x2="14" y2="28" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFEF4D"/>
            <stop offset="1" stop-color="#EC9E06"/>
        </linearGradient>
    </defs>
</svg>
`,l=a.d`
<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5012 4.04593e-07C12.8507 -0.00043666 12.2 0.353233 11.8654 1.06098L8.68171 7.79703L1.56267 8.8772C0.0675789 9.10405 -0.529405 11.0226 0.552454 12.1237L5.70384 17.367L4.48776 24.7705C4.28561 26.0014 5.22267 27.0007 6.2853 27C6.56599 27.0001 6.85552 26.9306 7.13518 26.7771L13.5013 23.2823L19.8674 26.7771C21.2047 27.5112 22.7676 26.3255 22.5122 24.7705L21.2961 17.367L26.4476 12.1237C27.5294 11.0226 26.9324 9.10405 25.4374 8.8772L18.3183 7.79703L15.1345 1.06098C14.8006 0.354431 14.1506 0.000775841 13.5012 4.04593e-07C13.5009 4.04593e-07 13.5015 4.04593e-07 13.5012 4.04593e-07ZM13.5021 21.1392V2.38572L16.5493 8.83267C16.8148 9.39443 17.328 9.7838 17.9217 9.87389L24.74 10.9084L19.8061 15.9301C19.3766 16.3675 19.1806 16.9974 19.282 17.615L20.4467 24.7058L14.3482 21.3579C14.0834 21.2126 13.7928 21.1397 13.5021 21.1392Z" fill="url(#paint0_linear_75_17845)"/>
    <defs>
        <linearGradient id="paint0_linear_75_17845" x1="13.5" y1="0" x2="13.5" y2="27" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFEC4A"/>
            <stop offset="1" stop-color="#EC9E06"/>
        </linearGradient>
    </defs>
</svg>
`,d=a.d`
<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 0C13.5004 0 13.5008 -2.66365e-07 13.5012 0C14.1506 0.00077608 14.8006 0.354431 15.1345 1.06098L18.3183 7.79703L25.4373 8.8772C26.9324 9.10405 27.5294 11.0226 26.4476 12.1237L21.2961 17.367L22.5122 24.7705C22.7676 26.3255 21.2047 27.5112 19.8674 26.7771L13.5013 23.2823L13.5 23.283V0ZM13.5021 2.38572V21.1392C13.7928 21.1397 14.0834 21.2126 14.3482 21.3579L20.4467 24.7058L19.282 17.615C19.1806 16.9974 19.3766 16.3675 19.8061 15.9301L24.74 10.9084L17.9217 9.87389C17.328 9.78379 16.8147 9.39443 16.5493 8.83267L13.5021 2.38572Z" fill="url(#paint0_linear_75_17858)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 0C13.4996 0 13.4992 -2.66298e-07 13.4988 0C12.8494 0.000775841 12.1994 0.354431 11.8655 1.06098L8.68165 7.79703L1.56265 8.8772C0.0675583 9.10405 -0.529369 11.0226 0.552422 12.1237L5.70389 17.367L4.48775 24.7705C4.23243 26.3255 5.7953 27.5112 7.13255 26.7771L13.4987 23.2823L13.5 23.283V0ZM13.5 0C13.5004 0 13.5008 -2.72162e-07 13.5012 0ZM13.4979 2.38572V21.1392C13.2072 21.1397 12.9166 21.2126 12.6518 21.3579L6.55331 24.7058L7.718 17.615C7.8194 16.9974 7.62335 16.3675 7.19385 15.9301L2.26004 10.9084L9.07834 9.87389C9.67203 9.78379 10.1852 9.39443 10.4507 8.83267L13.4979 2.38572Z" fill="url(#paint1_linear_75_17858)"/>
    <g clip-path="url(#clip0_75_17858)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 1.18459e-07C13.5004 1.18459e-07 13.5008 -1.48073e-07 13.5012 1.18459e-07C14.1506 0.00077608 14.8006 0.354431 15.1345 1.06098L18.3183 7.79703L25.4373 8.8772C26.9324 9.10405 27.5294 11.0226 26.4476 12.1237L21.2961 17.367L22.5122 24.7705C22.7676 26.3255 21.2047 27.5112 19.8674 26.7771L13.5013 23.2823L13.5 23.283V1.18459e-07ZM13.5021 2.38572V21.1392C13.7928 21.1397 14.0834 21.2126 14.3482 21.3579L20.4467 24.7058L19.282 17.615C19.1806 16.9974 19.3766 16.3675 19.8061 15.9301L24.74 10.9084L17.9217 9.87389C17.328 9.7838 16.8147 9.39443 16.5493 8.83267L13.5021 2.38572Z" fill="url(#paint2_linear_75_17858)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 1.20919e-07C13.4996 1.20919e-07 13.4992 -1.45474e-07 13.4988 1.20919e-07C12.8494 0.000775962 12.1994 0.354431 11.8655 1.06098L8.68165 7.79703L1.56265 8.8772C0.0675581 9.10405 -0.529371 11.0226 0.55242 12.1237L5.70389 17.367L4.48775 24.7705C4.23243 26.3255 5.7953 27.5112 7.13255 26.7771L13.4987 23.2823L13.5 23.283V1.20919e-07ZM13.5 1.20919e-07C13.5004 1.20919e-07 13.5008 -1.51148e-07 13.5012 1.20919e-07H13.5ZM13.4979 2.38572V21.1392C13.2072 21.1397 12.9166 21.2126 12.6518 21.3579L6.55331 24.7058L7.718 17.615C7.8194 16.9974 7.62335 16.3675 7.19385 15.9301L2.26003 10.9084L9.07834 9.87389C9.67203 9.78379 10.1853 9.39443 10.4507 8.83267L13.4979 2.38572Z" fill="url(#paint3_linear_75_17858)"/>
    </g>
    <defs>
        <linearGradient id="paint0_linear_75_17858" x1="13.5" y1="0" x2="13.5" y2="27" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFEC4A"/>
            <stop offset="1" stop-color="#EC9E06"/>
        </linearGradient>
        <linearGradient id="paint1_linear_75_17858" x1="13.5012" y1="0" x2="13.5012" y2="27" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFEC4A"/>
            <stop offset="1" stop-color="#EC9E06"/>
        </linearGradient>
            <linearGradient id="paint2_linear_75_17858" x1="13.5" y1="0" x2="13.5" y2="27" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFEC4A"/>
            <stop offset="1" stop-color="#EC9E06"/>
        </linearGradient>
        <linearGradient id="paint3_linear_75_17858" x1="13.5012" y1="0" x2="13.5012" y2="27" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFEC4A"/>
            <stop offset="1" stop-color="#EC9E06"/>
        </linearGradient>
            <clipPath id="clip0_75_17858">
            <rect width="27" height="27" fill="white"/>
        </clipPath>
    </defs>
</svg>
`,c={RED:"red",YELLOW:"yellow"},p=t=>{switch(t){case c.RED:return o;case c.YELLOW:return s;default:return o}},g=t=>{switch(t){case c.RED:return n;case c.YELLOW:return l;default:return n}},h=t=>{switch(t){case c.RED:return r;case c.YELLOW:return d;default:return r}}},84446:function(t,e,i){i.d(e,{F:function(){return d}});var a=i(33940),o=i(89346),n=i(53046),r=i(87697),s=i(33764);const l=new Map([["flex","MsnFlexLayout"],["pixel","MsnPixelLayout"],["block","MsnBlockLayout"]]);class d extends o.H{constructor(){super(...arguments),this._displayName="MsnUberLayout"}connectedCallback(){var t;super.connectedCallback();const e=null===(t=this.layoutConfig)||void 0===t?void 0:t.mode;if(l.has(e)&&l.get(e)!==this._displayName)return;const i=Object.keys(this.layoutConfig||{}).filter((t=>"mode"!==t)).map((t=>{var e;return(0,s._t)(t,null===(e=this.layoutConfig)||void 0===e?void 0:e[t])})).filter((t=>""!==t));this.layoutStyle=n.i`${i.length>0?`:host {${i.join(";")}}`:""}`}}(0,a.gn)([r.LO],d.prototype,"layoutConfig",void 0),(0,a.gn)([r.LO],d.prototype,"layoutStyle",void 0)},53212:function(t,e,i){i.d(e,{lq:function(){return y}});var a=i(33940),o=i(67479),n=i(12968),r=i(36159),s=i(18769),l=i(18536),d=i(21616),c=i(13400),p=i(72815),g=i(92530),h=i(81183);const u="ClickedBeaconAttached",m="ViewedBeaconAttached",v="UserActionBeaconAttached",f=new WeakSet;class b extends o.m0{constructor(t,e=!0,i=!0,a=!1){super(),this.binding=t,this.shouldCallClickBeacon=e,this.shouldCallVisibilityBeacon=i,this.shouldWatchCustomEvent=a}createBehavior(t){return new x(t,this.binding,this.shouldCallClickBeacon,this.shouldCallVisibilityBeacon,this.shouldWatchCustomEvent)}createPlaceholder(t){return n.SO.createCustomAttributePlaceholder("ad-beacon",t)}}class x{constructor(t,e,i=!0,a=!0,o=!1,n=!1){var s,p;this.target=t,this.binding=e,this.shouldCallClickBeacon=i,this.shouldCallVisibilityBeacon=a,this.shouldWatchCustomEvent=o,this.isClarityEnabled=n,this.beaconService=null,this.nativeAdBeaconsSetAttribute="nab",this.adsFlights="",this.onClick=(t,e)=>i=>{var a,o;if(i.target===i.currentTarget)return this.fireClickedBeacon(),void this.handleClickUserAction(i);if(!this.isTelemetryWc(i.currentTarget))return;const n=this.getImmediateChildFromTelemetryWc(i.currentTarget);i.target===n&&(i.currentTarget.clickedBeacon&&(this.fireTelemetryWcClickedBeacon(i),null===(o=(a=this.userActionLog).fireClickLog)||void 0===o||o.call(a,t,e,i)),i.currentTarget.clickedUserAction&&this.handleClickUserAction(i),i.currentTarget.clickedTelemetry&&this.handleClickTelemetry(i))},this.fireTelemetryWcClickedBeacon=t=>{const e=t.composedPath();let i=!1;for(let a=e.length-1;a>=0;a--)if(t.currentTarget!==e[a]){if(i&&this.isTelemetryWc(e[a]))return}else i=!0;this.fireClickedBeacon()},this.fireClickedBeacon=()=>{this.beaconService.fireClickTrackingCall(this.clickBeacons,this.beaconsJson),this.isClarityEnabled&&h.V.writeCustomTag("NativeAdHasBeenClicked",!0)},this.getImmediateChildFromTelemetryWc=t=>{if(this.isTelemetryWc(t)&&t.children.length>0)return t.children[0]},this.getUserActionBeacons=t=>{const e=JSON.parse(t),i=e&&e.trb;if(this.userActionBeacons=new Array,i)for(let t=0;t<i.length;t++)if(i[t].includes("srtb.msn.com")){const e=new URL(i[t]);e.pathname=e.pathname.replace("served","useraction"),this.userActionBeacons.push(e)}},this.onUserActionEvt=t=>{t.stopPropagation();const{eventType:e,dur:i,message:a,element:o}=t.detail;this.onUserActionCore(e,i,a,o)},this.onUserActionCore=(t,e,i,a)=>{if(this.userActionBeacons)for(let o=0;o<this.userActionBeacons.length;o++){for(const t of Object.values(r.Cw))this.userActionBeacons[o].searchParams.delete(t);if(t){this.userActionBeacons[o].searchParams.set(r.Cw.EventType,t),this.userActionBeacons[o].searchParams.set(r.Cw.Timestamp,(this.start?(new Date).getTime()-this.start:0).toString()),this.userActionBeacons[o].searchParams.set(r.Cw.Duration,e||0);const n={m:i,f:this.adsFlights};this.userActionBeacons[o].searchParams.set(r.Cw.Message,JSON.stringify(n)),this.userActionBeacons[o].searchParams.set(r.Cw.Element,a||"")}this.beaconService.fireUserActionBeacon(this.userActionBeacons[o].href)}},this.isTelemetryWc=t=>t.tagName&&"msn-native-ad-telemetry"===t.tagName.toLowerCase(),this.handleClickUserAction=t=>{var e,i,a;const o=this.getClickTarget(t),n=[];(null===(e=null==o?void 0:o.tagName)||void 0===e?void 0:e.toLowerCase)&&n.push(null==o?void 0:o.tagName.toLowerCase()),(null===(i=null==o?void 0:o.className)||void 0===i?void 0:i.toLowerCase)&&n.push(null==o?void 0:o.className.toLowerCase()),(null===(a=null==o?void 0:o.id)||void 0===a?void 0:a.toLowerCase)&&n.push(null==o?void 0:o.id.toLowerCase())},this.handleClickTelemetry=t=>{const e=this.getClickTarget(t);t.currentTarget.dataset.t&&(e.dataset.t=t.currentTarget.dataset.t,delete t.currentTarget.dataset.t,l.u.addElement(e))},this.getBindingSource=t=>{var e;return t instanceof HTMLElement?["native-ad-wc","msn-native-ad-title-mask"].includes(null===(e=null==t?void 0:t.tagName)||void 0===e?void 0:e.toLocaleLowerCase())?t.adData:t.data:t},Array.isArray(null===(s=null===c.jG||void 0===c.jG?void 0:c.jG.CurrentRequestTargetScope)||void 0===s?void 0:s.pageExperiments)&&(this.adsFlights=(0,g.Z)(d.N,null===(p=null===c.jG||void 0===c.jG?void 0:c.jG.CurrentRequestTargetScope)||void 0===p?void 0:p.pageExperiments).join(";"))}bind(t,e){const i=this.getBindingSource(t),{beaconsJson:a,adBeaconServiceConfig:o,clickBeacons:n,geminiViewabilityDataJson:r,bingTrackerUrls:l,items:d,videoViewabilityData:c,isClarityEnabled:p}=this.binding?this.binding(i,e):i;if(a&&n&&(this.start=(new Date).getTime(),this.isClarityEnabled=p,this.beaconsJson=a,this.clickBeacons=n,this.geminiViewabilityDataJson=r,this.beaconService=new s.A(o),this.shouldCallClickBeacon&&(this.target.addEventListener("click",this.onClick(t,e)),this.target[u]=!0),this.shouldWatchCustomEvent&&(this.getUserActionBeacons(a),this.target.addEventListener("NativeAdUserAction",this.onUserActionEvt),this.target[v]=!0),this.shouldCallVisibilityBeacon)){if(c){if(f.has(this.target))return;f.add(this.target)}this.beaconService.elementVisibilityObserver(this.target,a,r,d&&d[0]?d[0].uniqueId:void 0,l,c,t,e),this.target[m]=!0}}unbind(){}getClickTarget(t){if("adChoice"===t.currentTarget.telemetryMetadata&&t.composedPath&&"function"==typeof t.composedPath){const e=t.composedPath();for(let t=0;t<e.length;++t){const i=e[t];if(i.tagName&&"a"===i.tagName.toLowerCase()&&"native-ad-ad-choice"===i.className.toLowerCase())return i}}if(!t.composedPath||"function"!=typeof t.composedPath)return t.target;{const e=t.composedPath();if(e.length>0)return e[0]}}}function y(t=!0,e=!0,i=!1,a){return new b(a,t,e,i)}(0,a.gn)([(0,p.f3)(r.Km)],x.prototype,"userActionLog",void 0)},81183:function(t,e,i){i.d(e,{V:function(){return o}});const a={adCarousel:"NativeAdCarouselEnabled",allowedAssets:"NativeAdAllowedAssets",animatedImage:"NativeAdAnimatedImageType",landscapeOverlay:"NativeAdLandscapeOverlayEnabled",progressiveDisplay:"NativeAdProgressiveDisplayEnabled",templateType:"NativeAdTemplateType"},o=new class{constructor(){this.loggedTags={}}writeCustomTag(t,e){if(window.clarity&&null!=e){const i=e.toString();this.loggedTags[t]&&this.loggedTags[t][i]||(window.clarity("set",t,i),this.loggedTags[t]=this.loggedTags[t]||{},this.loggedTags[t][i]=!0)}}logAdTemplateConfig(t){t&&Object.keys(a).forEach((e=>{this.writeCustomTag(a[e],t[e])}))}}},38856:function(t,e,i){i.d(e,{O:function(){return l},_:function(){return d}});var a=i(18769),o=i(36159),n=i(13400),r=i(92530),s=i(21616);const l=(t,e,i,a=0)=>{t&&t.dispatchEvent(new CustomEvent("NativeAdUserAction",{bubbles:!0,cancelable:!0,composed:!0,detail:{eventType:e,dur:a,message:i,element:t.tagName.toLowerCase()}}))},d=(t,e,i,l=0,d)=>{var c,p;const g=new o.Km,h=new a.A;let u="";Array.isArray(null===(c=null===n.jG||void 0===n.jG?void 0:n.jG.CurrentRequestTargetScope)||void 0===c?void 0:c.pageExperiments)&&(u=(0,r.Z)(s.N,null===(p=null===n.jG||void 0===n.jG?void 0:n.jG.CurrentRequestTargetScope)||void 0===p?void 0:p.pageExperiments).join(";"));const m=g.populateBeaconUrl(t,u,e,i,l,d);h.fireUserActionBeacon(null==m?void 0:m.href)}},52682:function(t,e,i){i.d(e,{bS:function(){return Se}});var a=i(33940),o=i(72815),n=i(29416),r=i(9791);const s=(0,r.Z)(((t,e,i)=>Object.assign(Object.assign({},t),{config:e,strings:i})));var l=i(65620),d=i(26415),c=i(92773),p=i(84446);let g=class extends p.F{constructor(){super(...arguments),this.destinationUrl="",this.title="",this.telemetryMetadata=void 0}connectedCallback(){super.connectedCallback()}};(0,a.gn)([(0,l.Lj)({attribute:"destination-url"})],g.prototype,"destinationUrl",void 0),(0,a.gn)([(0,l.Lj)({attribute:"title"})],g.prototype,"title",void 0),(0,a.gn)([l.Lj],g.prototype,"id",void 0),(0,a.gn)([(0,l.Lj)({attribute:"tel-metadata"})],g.prototype,"telemetryMetadata",void 0),g=(0,a.gn)([(0,c.uj)(d.EoX,"msn-native-ad-title-mask")],g);var h=i(89346),u=i(53046),m=i(78562);const v=u.i`
    .native-ad-title-mask a:after {
        bottom: 0;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
    }
`.withBehaviors(new m.g("layoutStyle"));var f=i(39181);const b=f.d`
    <div 
        class="native-ad-title-mask" 
        title = ${t=>t.title}
    >
        <a 
            target = "_blank"
            href = ${t=>t.destinationUrl}
            class="heading"
            id="heading"
            data-t="${t=>t.telemetryMetadata}"
        >
        </a>
    </div>
`;let x=class extends g{};x=(0,a.gn)([(0,h.M)({name:"msn-native-ad-title-mask",template:b,styles:v})],x);var y=i(53212);var C=i(13988),w=i(87697);let $=class extends p.F{constructor(){super(...arguments),this.src="",this.rlink="",this.id="",this.altText="",this.width="300px",this.height="225px",this.isHovered=!1,this.imageMaskOn="off",this.imageMaskOpacity="0.5",this.trimBottom=!1,this.objectFit="",this.useDropShadow=!1,this.useTransparentBackground=!1,this.imageMaskLeft="",this.imageMaskTop="",this.imageMaskWidth="",this.imageMaskHeight="",this.enableNativeAdHoverContrast=!1,this.patternMode="",this.darkThemeMediaQuery=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)"),this.isDarkMode=this.darkThemeMediaQuery.matches,this.themeModeSwitchHandler=()=>{this.isDarkMode=!this.isDarkMode}}disconnectedCallback(){this.patternMode&&this.darkThemeMediaQuery.removeEventListener("change",this.themeModeSwitchHandler)}connectedCallback(){super.connectedCallback(),this.patternMode&&this.darkThemeMediaQuery.addEventListener("change",this.themeModeSwitchHandler)}};(0,a.gn)([l.Lj],$.prototype,"src",void 0),(0,a.gn)([l.Lj],$.prototype,"rlink",void 0),(0,a.gn)([l.Lj],$.prototype,"id",void 0),(0,a.gn)([(0,l.Lj)({attribute:"alt-text"})],$.prototype,"altText",void 0),(0,a.gn)([l.Lj],$.prototype,"width",void 0),(0,a.gn)([l.Lj],$.prototype,"height",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-hovered"})],$.prototype,"isHovered",void 0),(0,a.gn)([(0,l.Lj)({attribute:"image-mask-on"})],$.prototype,"imageMaskOn",void 0),(0,a.gn)([(0,l.Lj)({attribute:"image-mask-opacity"})],$.prototype,"imageMaskOpacity",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"trim-bottom"})],$.prototype,"trimBottom",void 0),(0,a.gn)([(0,l.Lj)({attribute:"object-fit"})],$.prototype,"objectFit",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"use-drop-shadow"})],$.prototype,"useDropShadow",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"use-transparent-background"})],$.prototype,"useTransparentBackground",void 0),(0,a.gn)([(0,l.Lj)({attribute:"image-mask-left"})],$.prototype,"imageMaskLeft",void 0),(0,a.gn)([(0,l.Lj)({attribute:"image-mask-top"})],$.prototype,"imageMaskTop",void 0),(0,a.gn)([(0,l.Lj)({attribute:"image-mask-width"})],$.prototype,"imageMaskWidth",void 0),(0,a.gn)([(0,l.Lj)({attribute:"image-mask-height"})],$.prototype,"imageMaskHeight",void 0),(0,a.gn)([(0,l.Lj)({attribute:"enable-native-ad-hover-contrast",mode:"boolean"})],$.prototype,"enableNativeAdHoverContrast",void 0),(0,a.gn)([(0,l.Lj)({attribute:"pattern-mode"})],$.prototype,"patternMode",void 0),(0,a.gn)([w.LO],$.prototype,"isDarkMode",void 0),$=(0,a.gn)([(0,c.uj)(d.EoX,"msn-native-ad-product-image")],$);var k=i(67620),L=i(40082),T=i(62319),S=i(17525),F=i(64262),A=i(65503);const I=u.i`
.native-ad-product-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.enable-hover-effect {
    filter: contrast(115%);
}

.native-ad-product-image-trim-bottom {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
}

.off {
    display: none;
}

.drop-shadow {
    filter: drop-shadow(0px 4.8px 14.4px rgba(0, 0, 0, 0.18)) drop-shadow(0px 4px 18px rgba(0, 0, 0, 0.15));
}
`.withBehaviors(new m.g("layoutStyle"),new k.j(["objectFit","isHovered","imageMaskLeft","imageMaskTop","imageMaskOpacity","useTransparentBackground","enableNativeAdHoverContrast"],(t=>{const e="undefined"===t.imageMaskOpacity||null==t.imageMaskOpacity?"0.5":t.imageMaskOpacity;let i="";if("on"===t.imageMaskOn&&t.isHovered&&!t.enableNativeAdHoverContrast){i=`\n                    :host::before {\n                        content: "";\n                        position: fixed;\n                        left: ${t.imageMaskLeft?`${t.imageMaskLeft}px`:0};\n                        top: ${t.imageMaskTop?`${t.imageMaskTop}px`:0};\n                        width: ${t.imageMaskWidth?`${t.imageMaskWidth}px`:"100%"};\n                        height: ${t.imageMaskHeight?`${t.imageMaskHeight}px`:"100%"};\n                        opacity: ${e};\n                        background: var(--ad-background-color);\n                        animation: fadeIn 0.1s linear;\n                        transition: opacity 0.1s linear;\n                        z-index: 1;\n                    }\n                `}"off"!==t.imageMaskOn&&t.isHovered||(i="\n                    :host::before {\n                        opacity: 0;\n                    }\n                ");let a="";return t.patternMode&&("patternMode1"===t.patternMode?a=`\n                        :host {\n                            background-image: url(${t.isDarkMode?F:T});\n                            background-position: 0 0;\n                            background-size: 100% 100%;\n                        }\n                    `:"patternMode2"===t.patternMode&&(a=`\n                        :host {\n                            background-image: url(${t.isDarkMode?A:S});\n                            background-position: 0 0;\n                            background-size: 100% 100%;\n                        }\n                    `)),u.i`
                :host img {
                    background: ${t.useTransparentBackground?"unset":"#2E2E2E"};
                }

                ${i}

                ${a}
                
                .object-fit {
                    object-fit: ${t.objectFit};
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: ${e};
                    }
                }
            `})),(0,L.vF)(u.i`
                :host::after {
                    background: buttonface;
                }
            `)),M=f.d`
    ${(0,C.g)((t=>!t.patternMode),f.d`
        <img
            src="${t=>t.src}"
            alt="${t=>t.altText}"
            class="object-fit ${t=>(t=>{const e=[];return t.useDropShadow&&e.push("drop-shadow"),t.isHovered&&t.enableNativeAdHoverContrast&&e.push("enable-hover-effect"),t.trimBottom?e.push("native-ad-product-image-trim-bottom"):e.push("native-ad-product-image"),e.join(" ")})(t)}"
            @load=${t=>t.visualReadinessCallback&&t.visualReadinessCallback()}
            @error=${(t,e)=>{t.visualReadinessCallback&&t.visualReadinessCallback(e.event)}}
        />
    `)}
`;let _=class extends ${};_=(0,a.gn)([(0,h.M)({name:"msn-native-ad-product-image",template:M,styles:I,shadowOptions:{delegatesFocus:!0}})],_);let j=class extends p.F{constructor(){super(...arguments),this.color="",this.paddingTop="78",this.paddingBottom="53",this.isRadialMask="false",this.isFullGradient="false",this.height="",this.useDynamicStyle="",this.useShorterGradient=!1,this.background="",this.peSeasonalColorMode=""}connectedCallback(){super.connectedCallback()}};(0,a.gn)([l.Lj],j.prototype,"color",void 0),(0,a.gn)([l.Lj],j.prototype,"paddingTop",void 0),(0,a.gn)([l.Lj],j.prototype,"paddingBottom",void 0),(0,a.gn)([(0,l.Lj)({attribute:"is-radial-mask"})],j.prototype,"isRadialMask",void 0),(0,a.gn)([(0,l.Lj)({attribute:"is-full-gradient"})],j.prototype,"isFullGradient",void 0),(0,a.gn)([l.Lj],j.prototype,"height",void 0),(0,a.gn)([(0,l.Lj)({attribute:"use-dynamic-style"})],j.prototype,"useDynamicStyle",void 0),(0,a.gn)([(0,l.Lj)({attribute:"use-short-gradient",mode:"boolean"})],j.prototype,"useShorterGradient",void 0),(0,a.gn)([l.Lj],j.prototype,"background",void 0),(0,a.gn)([(0,l.Lj)({attribute:"pe-seasonal-color-mode"})],j.prototype,"peSeasonalColorMode",void 0),j=(0,a.gn)([(0,c.uj)(d.EoX,"msn-native-gradient-mask")],j);const B=u.i`

.native-ad-mask {
    cursor: pointer;
    padding-bottom: 45px;
    padding-top: 78px;
    background: linear-gradient(var(--gradient-end-color) 0%, var(--gradient-mid-color) 40%, var(--ad-background-color) 50%, var(--ad-background-color) 100%);
}

.use-short-gradient{
    cursor: pointer;
    padding-bottom: 45px;
    padding-top: 45px;
    background: linear-gradient(var(--gradient-end-color) 0%, var(--gradient-mid-color) 23%, var(--ad-background-color) 34%, var(--ad-background-color) 100%);
}

.padding-top-30 {
    padding-top: 30px;
    background: linear-gradient(var(--gradient-end-color) 0%, var(--gradient-mid-color) 40%, var(--ad-background-color) 50%, var(--ad-background-color) 100%);
}

.padding-top-10 {
    padding-top: 10px;
    background: linear-gradient(var(--gradient-end-color) 0%, var(--gradient-mid-color) 40%, var(--ad-background-color) 50%, var(--ad-background-color) 100%);
}

.padding-top-90 {
    padding-top: 90px;
    padding-bottom: 50px;
    background: linear-gradient(var(--gradient-end-color) 0%, var(--gradient-mid-color) 50%, var(--ad-background-color) 60%, var(--ad-background-color) 100%);
}

.padding-top-120 {
    padding-top: 120px;
    padding-bottom: 70px;
    background: linear-gradient(var(--gradient-end-color) 0%, var(--gradient-mid-color) 30%, var(--ad-background-color) 50%, var(--ad-background-color) 100%);
}

.padding-top-100 {
    padding-top: 100px;
    padding-bottom: 70px;
    background: linear-gradient(var(--gradient-end-color) 0%, var(--gradient-mid-color) 30%, var(--ad-background-color) 50%, var(--ad-background-color) 100%);
}


.padding-bottom-0 {
    padding-bottom: 0px;
    padding-top: 60px;
    background: linear-gradient(var(--gradient-end-color) 0%, var(--gradient-mid-color) 40%, var(--ad-background-color) 50%, var(--ad-background-color) 100%);
}

.native-ad-radial-mask {
    background: radial-gradient(500px 150px ellipse at 50% 0%,var(--gradient-end-color) 0%, var(--gradient-end-color) 30%, var(--gradient-mid-color) 70%, var(--ad-background-color) 100%);
}

.native-ad-full-gradient {
    height: 100%;
    background: linear-gradient(var(--gradient-end-color) 0%, var(--ad-background-color) 100%);
}

@media (prefers-color-scheme: light) {
    .peSeasonalColorMode1 {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 23%, rgba(255, 255, 255, 0.8) 34%, #FFFFFF 100%);
    }

    .peSeasonalColorMode2 {
        background: linear-gradient(180deg, rgba(107, 193, 210, 0) 0%, rgba(177, 224, 233, 0.8) 23%, #B1E0E9 34%, #FFFFFF 70%, #EEDEBF 100%);
    }

    .peSeasonalColorMode3 {
        background: linear-gradient(180deg, rgba(255, 233, 176, 0) 0%, rgba(255, 233, 176, 0.8) 23%, #FFE9B0 34%, #FFE9B0 100%);
    }

    .peSeasonalColorMode4 {
        background: linear-gradient(180deg, rgba(206, 159, 166, 0) 0%, rgba(227, 202, 206, 0.8) 23%, #E3CACE 34%, #FFE9E8 100%);
    }
}


@media (prefers-color-scheme: dark) {
    .peSeasonalColorMode1 {
        background: linear-gradient(180deg, rgba(43, 43, 43, 0) 0%, rgba(43, 43, 43, 0.8) 23%, #2B2B2B 34%, #2B2B2B 100%)
    }

    .peSeasonalColorMode2 {
        background: linear-gradient(180deg, rgba(11, 35, 63, 0) 0%, rgba(11, 35, 63, 0.8) 23%, #0B233F 34%, #040D17 100%);
    }

    .peSeasonalColorMode3 {
        background: linear-gradient(180deg, rgba(58, 35, 0, 0) 0%, rgba(58, 35, 0, 0.8) 23%, #3A2300 34%, #1F1200 100%);
    }

    .peSeasonalColorMode4 {
        background: linear-gradient(180deg, rgba(56, 0, 31, 0) 0%, rgba(56, 0, 31, 0.8) 23%, #38001F 34%, #2F0007 100%);
    }
}
`.withBehaviors(new m.g("layoutStyle"),new k.j(["height","paddingTop","paddingBottom","background"],(t=>{const e=(null==t?void 0:t.background)&&"undefined"!==(null==t?void 0:t.background)?t.background:"linear-gradient(var(--gradient-end-color) 0%, var(--ad-background-color) 100%)";return u.i`
                .native-ad-dynamic-style {
                    height: ${t.height}px;
                    padding-top: ${t.paddingTop}px;
                    padding-bottom: ${t.paddingBottom}px;
                    background: ${e};
                }

            `})),(0,L.vF)(u.i`
            .native-ad-mask,
            .padding-top-30,
            .padding-top-10,
            .padding-top-90,
            .padding-top-120,
            .padding-top-100,
            .padding-bottom-0 {
                background: linear-gradient(transparent 0%, buttonface 50%, buttonface 100%);
            }

            .native-ad-dynamic-style {
                display: none;
            }
        `)),z=f.d`
<div class="
        native-ad-mask 
        ${t=>"true"===t.useDynamicStyle?"native-ad-dynamic-style":""} 
        ${t=>"undefined"!==t.paddingTop?`padding-top-${t.paddingTop}`:""} 
        ${t=>"undefined"!==t.paddingBottom?`padding-bottom-${t.paddingBottom}`:""} 
        ${t=>"true"===t.isRadialMask?"native-ad-radial-mask":""}
        ${t=>"true"===t.isFullGradient?"native-ad-full-gradient":""}
        ${t=>t.useShorterGradient?"use-short-gradient":""}
        ${t=>t.peSeasonalColorMode}
      ">
       <slot></slot> 
</div>
`;let E=class extends j{};E=(0,a.gn)([(0,h.M)({name:"msn-native-gradient-mask",template:z,styles:B,shadowOptions:{delegatesFocus:!0}})],E);var H=i(29666),O=i(35772);let D=class extends p.F{constructor(){super(...arguments),this.title="",this.destinationUrl="",this.isHovered=!1,this.enableTitleClickableOnly=!1,this.isAnaheimDesign=!1,this.useSmallFontSize=!0,this.animationOn=!1,this.fontSize="",this.fontColor="black",this.customStyle="",this.customStyleHovered="",this.lineHeight="",this.fontWeight="",this.fontFamily="inherit",this.isFeedV2=!1,this.isRiverRegion=!1,this.telemetryMetadata=void 0}connectedCallback(){super.connectedCallback(),(0,O.Q)(this.fontFamily)}};(0,a.gn)([l.Lj],D.prototype,"title",void 0),(0,a.gn)([(0,l.Lj)({attribute:"destination-url"})],D.prototype,"destinationUrl",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-hovered"})],D.prototype,"isHovered",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"enable-title-clickable-only"})],D.prototype,"enableTitleClickableOnly",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-anaheim-design"})],D.prototype,"isAnaheimDesign",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"use-small-font-size"})],D.prototype,"useSmallFontSize",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"animation-on"})],D.prototype,"animationOn",void 0),(0,a.gn)([(0,l.Lj)({attribute:"font-size"})],D.prototype,"fontSize",void 0),(0,a.gn)([(0,l.Lj)({attribute:"font-color"})],D.prototype,"fontColor",void 0),(0,a.gn)([(0,l.Lj)({attribute:"custom-style"})],D.prototype,"customStyle",void 0),(0,a.gn)([(0,l.Lj)({attribute:"custom-style-hovered"})],D.prototype,"customStyleHovered",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"two-lines-title"})],D.prototype,"twoLinesTitle",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"one-line-title"})],D.prototype,"oneLineTitle",void 0),(0,a.gn)([(0,l.Lj)({attribute:"line-height"})],D.prototype,"lineHeight",void 0),(0,a.gn)([(0,l.Lj)({attribute:"font-weight"})],D.prototype,"fontWeight",void 0),(0,a.gn)([(0,l.Lj)({attribute:"font-family"})],D.prototype,"fontFamily",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-feed-v2"})],D.prototype,"isFeedV2",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-river-region"})],D.prototype,"isRiverRegion",void 0),(0,a.gn)([(0,l.Lj)({attribute:"tel-metadata"})],D.prototype,"telemetryMetadata",void 0),D=(0,a.gn)([(0,c.uj)(d.EoX,"msn-native-ad-title")],D);const R=u.i`
a {
    padding: 0 16px;
    font-size: 20px;
    font-weight: 600;
}

a:focus{
    outline: 0;
}

a::after {
    content: "";
    text-overflow: ellipsis;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 4;
}

.native-ad-title{
    color: var(--neutral-foreground-rest);
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
    word-break: break-word;
}

.is-river-region{
    margin-bottom: 2px;
}

.native-ad-title-hovered{
    color: var(--neutral-foreground-rest);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
    text-decoration: underline;
    word-break: break-word;
}

.animation-on {
    transition: max-height .365s;
    -webkit-line-clamp: 3;
}

.two-lines-title{
    -webkit-line-clamp: 2; 
}

.one-line-title{
    -webkit-line-clamp: 1; 
}

.is-feed-v2 {
    color: #1A1A1A;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
    text-decoration: none;
    word-break: break-word;
    line-height:24px;
}

@media (prefers-color-scheme: dark) {
    .is-feed-v2 {
        color: #FFFFFF;
    }
}

@media (forced-colors: active) {
    .native-ad-title,
    .native-ad-title-hovered {
        color: linktext;
        background: buttonface;
    }
}
`.withBehaviors(new m.g("layoutStyle"),new k.j(["lineHeight","fontSize","fontWeight","fontFamily"],(t=>{const e=`\n                .ad-title {\n                    line-height: ${t.lineHeight}px;\n                    font-size: ${t.fontSize}px;\n                    font-weight: ${t.fontWeight};\n                    font-family: ${t.fontFamily};\n                }\n                a { font-size: ${t.fontSize}px; }\n            `;return u.i`${e}`}))),P=f.d`
    <a 
        class="${t=>(t=>{let e="ad-title";return t.isFeedV2?(e="is-feed-v2",e):(t.isHovered?e+=" native-ad-title-hovered":e+=" native-ad-title",t.animationOn&&(e+=" animation-on"),t.twoLinesTitle&&(e+=" two-lines-title"),t.oneLineTitle&&(e+=" one-line-title"),t.isRiverRegion&&(e+=" is-river-region"),e)})(t)}" 
        style="${t=>t.isHovered?t.customStyleHovered:t.customStyle}" 
        href=${t=>t.destinationUrl}
        target="_blank"
        data-t="${t=>t.telemetryMetadata}"
    >
        ${(0,C.g)((t=>!t.isAnaheimDesign),f.d`${t=>t.title}`)}
        ${(0,C.g)((t=>t.isAnaheimDesign&&t.fontSize),f.d`${t=>t.title}`)}
        ${(0,C.g)((t=>t.isAnaheimDesign&&!t.fontSize),f.d`
            ${(0,C.g)((t=>!t.useSmallFontSize),f.d`<span class="title${t=>t.cardSize}">${t=>t.title}</span>`)}
            ${(0,C.g)((t=>t.useSmallFontSize),f.d`${t=>t.title}`)}
        `)}
    </a>
`;let Z=class extends D{};Z=(0,a.gn)([(0,h.M)({name:"msn-native-ad-title",template:P,styles:R})],Z);const{ShortTitle:V,CallToActionShortTitle:U}=H.SI;let N=class extends p.F{constructor(){super(...arguments),this.privacyUrl="",this.id="",this.adLabelText="Ad",this.nativeAdAdLabelText="",this.type="greenLabel",this.isDynamicRendering=!0,this.shouldAdjustGap=!1,this.cardLayout="default",this.telemetryMetadata="",this.adLabelTextOpacity="0.7",this.color="var(--neutral-foreground-rest)",this.isFeedV2=!1,this.isSeasonal=!1,this.isMsnHPAdSlug=!1,this.adLabelFontSize="var(--type-ramp-minus-2-font-size)"}connectedCallback(){super.connectedCallback()}};(0,a.gn)([(0,l.Lj)({attribute:"privacy-url"})],N.prototype,"privacyUrl",void 0),(0,a.gn)([l.Lj],N.prototype,"id",void 0),(0,a.gn)([(0,l.Lj)({attribute:"ad-label-text"})],N.prototype,"adLabelText",void 0),(0,a.gn)([(0,l.Lj)({attribute:"native-ad-ad-label-text"})],N.prototype,"nativeAdAdLabelText",void 0),(0,a.gn)([(0,l.Lj)({attribute:"type"})],N.prototype,"type",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-dynamic-rendering"})],N.prototype,"isDynamicRendering",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"should-adjust-gap"})],N.prototype,"shouldAdjustGap",void 0),(0,a.gn)([(0,l.Lj)({attribute:"layout"})],N.prototype,"layout",void 0),(0,a.gn)([(0,l.Lj)({attribute:"card-layout"})],N.prototype,"cardLayout",void 0),(0,a.gn)([(0,l.Lj)({attribute:"tel-metadata"})],N.prototype,"telemetryMetadata",void 0),(0,a.gn)([(0,l.Lj)({attribute:"ad-label-text-opacity"})],N.prototype,"adLabelTextOpacity",void 0),(0,a.gn)([(0,l.Lj)({attribute:"color"})],N.prototype,"color",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-feed-v2"})],N.prototype,"isFeedV2",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-seasonal"})],N.prototype,"isSeasonal",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-msn-hp-ad-slug"})],N.prototype,"isMsnHPAdSlug",void 0),(0,a.gn)([(0,l.Lj)({attribute:"ad-label-font-size"})],N.prototype,"adLabelFontSize",void 0),N=(0,a.gn)([(0,c.uj)(d.EoX,"msn-native-ad-ad-label")],N);const G=u.i`
    .native-ad-label-dr-wrapper {
        --ad-label-fill-grey: #595959;
        --ad-label-color-grey: #FFF;
        --ad-label-fill-green: #1E6525;
        --ad-label-color-white: #FFF;
        --outline-width: 1;
        --control-corner-radius: 2;
        outline: none;
        pointer-events: auto;
        font-family: var(--body-font);
        font-size: var(--type-ramp-minus-2-font-size);
        display: flex;
    }

    .native-ad-label-dr-wrapper-top-site-two-line {
        justify-content: center;
    }

    .ndr, .gap {
        margin-inline-end: 8px;
    }

    .native-ad-label-dr{
        box-sizing: border-box;
        padding: 0 6px;
        display: inline-block;
        line-height: 14px;
        border-radius: calc(var(--control-corner-radius) * 1px);
        text-decoration: none;
        border: calc(var(--stroke-width) * 1px) solid transparent;
    }

    .grey {
        background: var(--ad-label-fill-grey);
        color: var(--ad-label-color-grey);
    }

    .green {
        background: var(--ad-label-fill-green);
        color: var(--ad-label-color-white);
    }

    .white {
        background: white;
        color: lightgrey;
        border: calc(var(--stroke-width) * 1px) solid white;
    }

    .transparent-infopane {
        color: white;
        border: calc(var(--stroke-width) * 1px) solid white;
    }

    .transparent-river {
        color: lightgrey;
        border: calc(var(--stroke-width) * 1px) solid lightgrey;
    }

    .ad-label-topsite {
        box-sizing: border-box;
        display: inline-block;
        text-decoration: none;
        color: var(--top-site-color)
    }

    .ad-txt-small {
        font-size: 9px;
        line-height: 18px;
    }

    .ad-slug1 {
        color: var(--neutral-foreground-rest);
        border: 0.5px solid var(--neutral-foreground-rest);
    }

    .ad-slug2 {
        color: transparent;
        opacity: 0.3;
        border: 0.5px solid var(--neutral-foreground-rest);
        position: absolute;
    }

    .ad-slug2-text.is-feed-v2-text::before {
        border-color: #292929;
    }

    .ad-slug2-text.is-feed-v2-text {
        color: #292929;
    }

    .ad-slug2-text.is-seasonal-style::before {
        border-color: #000000;
        opacity: 1;
    }

    .ad-slug2-text.is-seasonal-style {
        color: #000000;
    }

    @media (prefers-color-scheme: dark) {
        .ad-slug2-text.is-feed-v2-text::before {
            border-color: #FFFFFF;
        }

        .ad-slug2-text.is-feed-v2-text {
            color: #FFFFFF;
        }

        .ad-slug2-text.is-seasonal-style::before {
            border-color: #FFFFFF;
            opacity: 1;
        }
    
        .ad-slug2-text.is-seasonal-style {
            color: #FFFFFF;
        }

    }
`.withBehaviors(new m.g("layoutStyle"),new k.j(["adLabelTextOpacity","color","adLabelFontSize"],(t=>u.i`
            .ad-slug2-text {
                --control-corner-radius: 4;
                position: relative;
                padding: 1px 5px;
                text-decoration: none;
                line-height: 16px;
                opacity: ${t.adLabelTextOpacity};
                color: ${t.color};
                font-size: ${t.adLabelFontSize}px;
            }

            .ad-slug2-text::before {
                content: "";
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                opacity: 0.3;
                box-sizing: border-box;
                border-radius: calc(var(--control-corner-radius) * 1px);
                border: 0.5px solid ${t.color};
            }

            .is-msn-hp-style {
                color: #2b2b2b;
                font-weight: 400;
                font-size: 11px;
                margin-inline-end: 6px;
            }

            .is-msn-hp-style::before {
                border: 0.5px solid #2b2b2b;
            }

            @media (forced-colors: active) {
                .ad-slug2-text::before {
                    border: 0.5px solid buttontext;
                    opacity: 1;
                }
        
                .ad-slug2-text {
                    color: buttontext;
                    opacity: 1;
                    background: buttonface;
                }
            }
        `)));var W;!function(t){t.default="default",t.condensed="condensed",t.infoPane="infoPane",t.infoPane1x3y="infoPane1x3y",t.infoPaneSplitVertical="infoPaneSplitVertical",t.infoPaneSplitHorizontal="infoPaneSplitHorizontal"}(W||(W={}));const q=f.d`
    ${(0,C.g)((t=>t.type),f.d`
        ${(0,C.g)((t=>"greyLabel"===t.type),f.d`
            <div class="native-ad-label-dr-wrapper">
                <a
                    class="native-ad-label-dr grey ${t=>t.shouldAdjustGap?"gap":""}"
                    href="${t=>t.privacyUrl}"
                    target="_blank"
                    title="${t=>t.nativeAdAdLabelText}"
                    data-t="${t=>t.telemetryMetadata}"
                >
                    ${t=>t.adLabelText}
                </a>
            </div>
        `)}
        ${(0,C.g)((t=>"greenLabel"===t.type),f.d`
            <div class="native-ad-label-dr-wrapper">
                <a 
                    class="native-ad-label-dr green ${t=>t.shouldAdjustGap?"gap":""}" 
                    href="${t=>t.privacyUrl}" 
                    target="_blank"
                    title="${t=>t.nativeAdAdLabelText}"
                    data-t="${t=>t.telemetryMetadata}"
                >
                    ${t=>t.adLabelText}
                </a>
            </div>
        `)}
        ${(0,C.g)((t=>"defaultLabel"===t.type),f.d`
            <div class="native-ad-label-dr-wrapper">
                <a 
                    class="ad-slug2-text ${t=>t.isMsnHPAdSlug?"is-msn-hp-style":""} ${t=>t.isSeasonal?"is-seasonal-style":""} ${t=>t.shouldAdjustGap?"gap":""} ${t=>t.isFeedV2?"is-feed-v2-text":""}" 
                    href="${t=>t.privacyUrl}"
                    target="_blank"
                    title="${t=>t.nativeAdAdLabelText}"
                    data-t="${t=>t.telemetryMetadata}"
                >
                    ${t=>t.adLabelText}
                </a>
            </div>
        `)}
        ${(0,C.g)((t=>"topSiteAdTxtSmall"===t.type),f.d`
            <div class="native-ad-label-dr-wrapper native-ad-label-dr-wrapper-top-site-two-line">
                <a
                    class="ad-label-topsite ad-txt-small" 
                    href="${t=>t.privacyUrl}"
                    target="_blank"
                    title="${t=>t.nativeAdAdLabelText}"
                    data-t="${t=>t.telemetryMetadata}"
                >
                    ${t=>t.adLabelText}
                </a>
            </div>
        `)}
    `)}
`;let Y=class extends N{};Y=(0,a.gn)([(0,h.M)({name:"msn-native-ad-ad-label",template:q,styles:G})],Y);const J=(t,e)=>e&&null!=e.adLabelType?e.adLabelType:t.isGreyAdsLabelEnabled?"greyLabel":t.adSlugGA?"defaultLabel":"greenLabel";let X=class extends p.F{constructor(){super(...arguments),this.url="",this.providerName="",this.whiteProviderName="",this.isNewAdSlugV2=!1,this.isNewAdSlugV2NonDr=!1,this.fontFamily="inherit",this.adSlugGA=!1,this.hasEliteBadge=!1,this.adLabelTextOpacity="0.7",this.fontSize="",this.lineHeight="",this.isFeedV2=!1,this.isMsnHPAdSlug=!1,this.color="var(--neutral-foreground-rest)",this.fontWeight="normal",this.isSeasonal=!1,this.eliteBadgeTitle=""}connectedCallback(){var t;super.connectedCallback(),(0,O.Q)(this.fontFamily),this.eliteBadgeTitle=null===(t=this.localizedStrings)||void 0===t?void 0:t.eliteBadgeTitle}};(0,a.gn)([l.Lj],X.prototype,"url",void 0),(0,a.gn)([(0,l.Lj)({attribute:"provider-name"})],X.prototype,"providerName",void 0),(0,a.gn)([(0,l.Lj)({attribute:"white-provider-name"})],X.prototype,"whiteProviderName",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-new-ad-slug-v2"})],X.prototype,"isNewAdSlugV2",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-new-ad-slug-v2-non-dr"})],X.prototype,"isNewAdSlugV2NonDr",void 0),(0,a.gn)([(0,l.Lj)({attribute:"custom-style-class"})],X.prototype,"customStyleClass",void 0),(0,a.gn)([(0,l.Lj)({attribute:"tel-metadata"})],X.prototype,"telemetryMetadata",void 0),(0,a.gn)([(0,l.Lj)({attribute:"font-family"})],X.prototype,"fontFamily",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"ad-slug-ga"})],X.prototype,"adSlugGA",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"has-elite-badge"})],X.prototype,"hasEliteBadge",void 0),(0,a.gn)([(0,l.Lj)({attribute:"ad-label-text-opacity"})],X.prototype,"adLabelTextOpacity",void 0),(0,a.gn)([(0,l.Lj)({attribute:"font-size"})],X.prototype,"fontSize",void 0),(0,a.gn)([(0,l.Lj)({attribute:"line-height"})],X.prototype,"lineHeight",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-feed-v2"})],X.prototype,"isFeedV2",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-msn-hp-ad-slug"})],X.prototype,"isMsnHPAdSlug",void 0),(0,a.gn)([l.Lj],X.prototype,"color",void 0),(0,a.gn)([(0,l.Lj)({attribute:"font-weight"})],X.prototype,"fontWeight",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-seasonal"})],X.prototype,"isSeasonal",void 0),(0,a.gn)([w.LO],X.prototype,"eliteBadgeTitle",void 0),(0,a.gn)([w.LO],X.prototype,"localizedStrings",void 0),X=(0,a.gn)([(0,c.uj)(d.EoX,"msn-native-ad-provider-name")],X);const K=u.i`
.provider-name-with-elite-badge-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.provider-name-with-elite-badge-wrapper .elite-badge-icon {
    margin-inline-end: 4px;
    display: flex;
}

.white {
    color: white;
    text-decoration: inherit;
}

.white-12-flex-layout{
    color: var(--neutral-foreground-rest);
    width: 100%;
    font-size: 12px;
    text-overflow: ellipsis;
    height: 24px;
    line-height: 24px;
}

.with-opacity-70{
    opacity: 0.7;
}

.with-opacity-70-non-dr {
    color: unset;
    opacity: 1;
}

.font-tenorite {
    font-family: Tenorite, Segoe UI, Segoe UI Midlevel, Arial, Sans-Serif;
    font-size: 14px;
    position: relative; 
    top: 2px;
}

`.withBehaviors(new m.g("layoutStyle"),new k.j(["adLabelTextOpacity","lineHight","fontSize"],(t=>u.i`
            .provider-name-hyper-link, 
            .provider-name {
                display: inline-block;
                max-width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                vertical-align: bottom;
                opacity: ${t.adLabelTextOpacity};
                font-size: ${t.fontSize}px;
                line-height: ${t.lineHeight}px;
                text-decoration: inherit;
                color: ${t.color&&"undefined"!==t.color?t.color:"var(--neutral-foreground-rest)"};
                font-weight: ${t.fontWeight&&"undefined"!==t.fontWeight?t.fontWeight:"normal"};
            }

            @media (forced-colors: active) {
                .provider-name-hyper-link, 
                .provider-name {
                    color: buttontext;
                    opacity: 1;
                    background: buttonface;
                }
            }

            .is-feed-v2 {
                color: #292929;
            }

            .is-seasonal-style {
                color: #000000;
            }

            .is-msn-hp-style {
                color: #2b2b2b;
            }

            @media (prefers-color-scheme: dark) {
                .is-feed-v2 {
                    color: #FFFFFF;
                }

                .is-seasonal-style {
                    color: #FFFFFF;
                }
            }
    `))),Q=f.d`
<a href="${t=>t.url}" target="_blank" title="${t=>t.eliteBadgeTitle}" class="elite-badge-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
        <path d="M6.5 0C7.05078 0 7.58203 0.0703125 8.09375 0.210938C8.60547 0.351562 9.08203 0.554688 9.52344 0.820312C9.96484 1.08594 10.3691 1.39844 10.7363 1.75781C11.1035 2.11719 11.418 2.52148 11.6797 2.9707C11.9414 3.41992 12.1426 3.89844 12.2832 4.40625C12.4238 4.91406 12.4961 5.44531 12.5 6C12.5 6.55078 12.4297 7.08203 12.2891 7.59375C12.1484 8.10547 11.9453 8.58203 11.6797 9.02344C11.4141 9.46484 11.1016 9.86914 10.7422 10.2363C10.3828 10.6035 9.97852 10.918 9.5293 11.1797C9.08008 11.4414 8.60156 11.6426 8.09375 11.7832C7.58594 11.9238 7.05469 11.9961 6.5 12C5.94922 12 5.41797 11.9297 4.90625 11.7891C4.39453 11.6484 3.91797 11.4453 3.47656 11.1797C3.03516 10.9141 2.63086 10.6016 2.26367 10.2422C1.89648 9.88281 1.58203 9.47852 1.32031 9.0293C1.05859 8.58008 0.857422 8.10156 0.716797 7.59375C0.576172 7.08594 0.503906 6.55469 0.5 6C0.5 5.44922 0.570312 4.91797 0.710938 4.40625C0.851562 3.89453 1.05469 3.41797 1.32031 2.97656C1.58594 2.53516 1.89844 2.13086 2.25781 1.76367C2.61719 1.39648 3.02148 1.08203 3.4707 0.820312C3.91992 0.558594 4.39844 0.357422 4.90625 0.216797C5.41406 0.0761719 5.94531 0.00390625 6.5 0ZM5.81445 7.89258C5.90039 7.89258 5.98242 7.87695 6.06055 7.8457C6.13867 7.81445 6.20703 7.76758 6.26562 7.70508L8.7793 5.19141C8.83789 5.13281 8.88281 5.06445 8.91406 4.98633C8.94531 4.9082 8.96094 4.82812 8.96094 4.74609C8.96094 4.66016 8.94531 4.57812 8.91406 4.5C8.88281 4.42188 8.83789 4.35547 8.7793 4.30078C8.7207 4.24609 8.65234 4.20117 8.57422 4.16602C8.49609 4.13086 8.41406 4.11328 8.32812 4.11328C8.24609 4.11328 8.16602 4.12891 8.08789 4.16016C8.00977 4.19141 7.93945 4.23633 7.87695 4.29492L5.81445 6.35742L5.12305 5.66602C4.99805 5.54102 4.84766 5.47852 4.67188 5.47852C4.58594 5.47852 4.50391 5.49414 4.42578 5.52539C4.34766 5.55664 4.2793 5.60352 4.2207 5.66602C4.16211 5.72852 4.11719 5.79492 4.08594 5.86523C4.05469 5.93555 4.03711 6.01758 4.0332 6.11133C4.0332 6.19336 4.04883 6.27344 4.08008 6.35156C4.11133 6.42969 4.1582 6.5 4.2207 6.5625L5.36328 7.70508C5.42188 7.76367 5.49023 7.80859 5.56836 7.83984C5.64648 7.87109 5.72852 7.88867 5.81445 7.89258Z" fill="white"/>
    </svg>
</a>
`,tt=f.d`
    <a
        href=\"${t=>t.url}\"
        class="${t=>"Tenorite"===t.fontFamily?"font-tenorite":""} ${t=>"true"===t.whiteProviderName?"white":`provider-name-hyper-link ${t.customStyleClass||""} ${t.isNewAdSlugV2&&!t.keepOpacity?"with-opacity-70":""} ${t.isNewAdSlugV2NonDr||!t.adSlugGA?"with-opacity-70-non-dr":""}`} ${t=>t.isFeedV2?"is-feed-v2":""} ${t=>t.isMsnHPAdSlug?"is-msn-hp-style":""} ${t=>t.isSeasonal?"is-seasonal-style":""}"
        target=\"_blank\"
        title=" ${t=>t.providerName}"
        data-t="${t=>t.telemetryMetadata}"
    >
        ${t=>t.providerName}
    </a>
`,et=f.d`
    ${(0,C.g)((t=>t.hasEliteBadge),f.d`
        <span class="provider-name-with-elite-badge-wrapper">
            ${Q}
            ${tt}
        </span>
    `)}
    ${(0,C.g)((t=>!t.hasEliteBadge),tt)}
`;let it=class extends X{};it=(0,a.gn)([(0,h.M)({name:"msn-native-ad-provider-name",template:et,styles:K})],it);var at=i(29837),ot=i(33764);let nt=class extends p.F{constructor(){super(...arguments),this.adChoiceIconUrl="",this.nativeAdAdChoiceText="",this.telemetryMetadata="",this.isFeedV2=!1}connectedCallback(){super.connectedCallback();const{iconStyles:t}=this,e=[];t&&Object.keys(t).forEach((i=>{e.push((0,ot._t)(i,t[i]))})),this.iconStyleStr=u.i`:host .native-ad-ad-choice {${e.length?e.join(";"):""}}`}};(0,a.gn)([(0,l.Lj)({attribute:"ad-choice-icon-url"})],nt.prototype,"adChoiceIconUrl",void 0),(0,a.gn)([(0,l.Lj)({attribute:"native-ad-ad-choice-text"})],nt.prototype,"nativeAdAdChoiceText",void 0),(0,a.gn)([(0,l.Lj)({attribute:"tel-metadata"})],nt.prototype,"telemetryMetadata",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean",attribute:"is-feed-v2"})],nt.prototype,"isFeedV2",void 0),(0,a.gn)([w.LO],nt.prototype,"iconStyles",void 0),(0,a.gn)([w.LO],nt.prototype,"iconStyleStr",void 0),nt=(0,a.gn)([(0,c.uj)(d.EoX,"msn-native-ad-ad-choice")],nt);const rt=u.i`
@media (forced-colors: active) {
    .native-ad-ad-choice {
        background: buttonface;
    }
}

.native-ad-ad-choice {
    width: 32px;
    height: 32px;
    display: inline-flex;
}
.native-ad-ad-choice svg {
    margin: auto;
}
`.withBehaviors(new m.g("layoutStyle"),new m.g("iconStyleStr")),st=f.d`
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.3845 -1.21037e-07C2.22828 -1.94803e-07 2.819 0.40029 3.40971 0.719747C3.91584 0.959663 4.42266 1.27977 5.01337 1.51968C7.71388 2.87964 10.4144 4.31978 13.1142 5.75992C13.958 6.16021 15.0548 6.55986 15.6455 7.28025C15.814 7.52017 16.0678 7.84027 15.9832 8.24056C15.7301 9.12068 14.5487 9.44079 13.7895 9.84043C11.9328 10.8007 9.99215 11.8406 8.13543 12.8003C7.46013 13.2005 6.44787 13.9203 5.60409 13.3603C5.26644 13.2005 5.09795 13.0402 5.01337 12.8003C4.92879 12.4802 5.01337 12.0805 5.01337 11.7604L5.01337 9.20023C5.01337 8.48048 4.92879 7.92046 5.4356 7.60035C5.60409 7.52017 5.94173 7.44063 6.1948 7.52017C7.03858 7.84027 6.78552 9.28041 6.78552 10.4005L6.78552 11.2799C8.22001 10.5602 9.6545 9.83979 11.089 9.20022C11.5951 8.96031 12.4389 8.72039 12.6081 8.08019C12.7766 7.36044 11.1736 6.80042 10.6675 6.55986L4.84489 3.43966C4.42266 3.19974 3.32581 2.3998 2.6512 2.63972C2.39813 2.71991 2.22897 2.95982 2.22897 3.11955C2.14438 3.43966 2.14438 3.91949 2.14438 4.31978L2.14438 6.87996L2.14438 11.1997C2.14438 11.8399 2.0598 12.6399 2.31287 13.0395C2.90358 13.8395 4.25349 12.3993 4.67572 13.6797C4.76031 13.9998 4.59114 14.3199 4.42266 14.4797C4.08501 14.9601 2.56593 15.6799 1.97522 15.8403C1.80674 15.9198 1.3845 16 1.13144 16C-0.303057 15.7601 0.0345918 13.6002 0.0345916 11.9997L0.0345909 4.07986C0.0345908 2.87964 -0.133892 1.27977 0.372239 0.560019C0.625305 0.159727 0.878371 0.159728 1.3845 -1.21037e-07ZM5.77257 5.1999C7.03858 5.1999 7.12248 6.72023 5.94105 6.96015C5.26576 7.04034 4.75962 6.40013 4.92811 5.84011C5.09727 5.43982 5.35034 5.35963 5.77257 5.1999Z" fill="#00AECD"/>
</svg>
`,lt=f.d`
<svg width="20" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.52344 5.69531C4.70573 5.69531 4.86198 5.63542 4.99219 5.51562C5.1224 5.39062 5.1875 5.24219 5.1875 5.07031C5.1875 4.89844 5.1224 4.7526 4.99219 4.63281C4.86198 4.50781 4.70573 4.44531 4.52344 4.44531C4.33594 4.44531 4.17708 4.50781 4.04688 4.63281C3.91667 4.7526 3.85156 4.89844 3.85156 5.07031C3.85156 5.24219 3.91667 5.39062 4.04688 5.51562C4.17708 5.63542 4.33594 5.69531 4.52344 5.69531ZM1.44531 0.921875V0.929688C1.33594 0.861979 1.21875 0.828125 1.09375 0.828125C0.90625 0.828125 0.747396 0.890625 0.617188 1.01562C0.486979 1.13542 0.421875 1.28125 0.421875 1.45312V11.375C0.421875 11.5469 0.486979 11.6953 0.617188 11.8203C0.747396 11.9401 0.90625 12 1.09375 12C1.19271 12 1.28906 11.9792 1.38281 11.9375H1.39062L1.40625 11.9219L3.20312 11.0625C3.48958 10.9635 3.63281 10.7708 3.63281 10.4844C3.63281 10.3073 3.56771 10.1589 3.4375 10.0391C3.30729 9.91406 3.15104 9.85156 2.96875 9.85156C2.85417 9.85156 2.74479 9.8776 2.64062 9.92969C2.63542 9.9401 2.61979 9.95052 2.59375 9.96094C2.51042 10.0026 2.42188 10.0234 2.32812 10.0234C2.17188 10.0234 2.03906 9.97396 1.92969 9.875C1.82031 9.77083 1.76302 9.64844 1.75781 9.50781V3.375C1.76302 3.22917 1.82031 3.10677 1.92969 3.00781C2.03906 2.90365 2.17188 2.85156 2.32812 2.85156C2.41667 2.85156 2.5 2.8724 2.57812 2.91406C2.58333 2.91406 2.58854 2.91667 2.59375 2.92188C2.59896 2.92188 2.60417 2.92448 2.60938 2.92969L8.53906 5.92188L8.64844 5.97656C8.8099 6.08594 8.89062 6.23177 8.89062 6.41406C8.89062 6.60677 8.80469 6.75521 8.63281 6.85938L8.5625 6.89844L5.1875 8.60938V6.67969C5.1875 6.5026 5.1224 6.35417 4.99219 6.23438C4.86198 6.11458 4.70573 6.05469 4.52344 6.05469C4.33594 6.05469 4.17708 6.11458 4.04688 6.23438C3.91667 6.35417 3.85156 6.5026 3.85156 6.67969V9.65625C3.85156 9.83333 3.91667 9.98177 4.04688 10.1016C4.17708 10.2214 4.33594 10.2812 4.52344 10.2812C4.65885 10.2812 4.78385 10.2448 4.89844 10.1719L11.125 7.00781C11.4271 6.90885 11.5781 6.71094 11.5781 6.41406C11.5781 6.14844 11.4453 5.95833 11.1797 5.84375L1.44531 0.921875ZM2.59375 9.96094C2.61979 9.95052 2.63542 9.9401 2.64062 9.92969L2.59375 9.96094ZM2.57812 2.91406C2.58333 2.91406 2.58854 2.91667 2.59375 2.92188C2.59896 2.92188 2.60417 2.92448 2.60938 2.92969L2.57812 2.91406Z" fill="#00aecd"/>
</svg>
`,dt=f.d`
${(0,C.g)((t=>t.adChoiceIconUrl),f.d`
    <a
        class="native-ad-ad-choice"
        href="${t=>t.adChoiceIconUrl}"
        target="_blank"
        title="${t=>t.nativeAdAdChoiceText}"
        data-t="${t=>t.telemetryMetadata}"
        aria-label="${t=>t.nativeAdAdChoiceText}"
    >
        ${(0,C.g)((t=>!t.isFeedV2),f.d`${lt}`)}
        ${(0,C.g)((t=>t.isFeedV2),f.d`
            ${st}
        `)}
    </a>
`)}
`;let ct=class extends nt{};ct=(0,a.gn)([(0,h.M)({name:"msn-native-ad-ad-choice",template:dt,styles:rt})],ct);let pt=class extends p.F{constructor(){super(...arguments),this.cardActionsTooltips=""}connectedCallback(){super.connectedCallback()}};(0,a.gn)([(0,l.Lj)({attribute:"card-actions-tooltips"})],pt.prototype,"cardActionsTooltips",void 0),(0,a.gn)([(0,l.Lj)({attribute:"data"})],pt.prototype,"data",void 0),pt=(0,a.gn)([(0,c.uj)(d.EoX,"msn-native-ad-see-more")],pt);const gt=u.i`
    .card-button {
        border-radius: 100%;
    }

    .card-button:not(:hover) {
        background: transparent;
    }

    .card-see-more {
        align-items: center;
        background-color: rgb(255, 255, 255);
        border-radius: 100%;
        border: 1px solid rgb(229, 229, 229);
        cursor: pointer;
        display: flex;
        height: 32px;
        justify-content: center;
        outline: none;
        margin-right: 2px;
        width: 32px;
    }

    .card-see-more svg {
        fill: inherit;
    }
`.withBehaviors(new m.g("layoutStyle"),new k.j(["data"],(t=>{let e="";return t.data&&(t.data.isInfopane||t.data.enableFilledIconOnHover&&(!t.data.enableFilledIconOnHover||t.data.optedOutOfReactions)||(e+="dynamic-styles {\n                        display: inline-flex;\n                    }")),u.i`${e}`})));var ht=i(46943),ut=i(51873),mt=i(18864),vt=i(40565),ft=i(82479);i(20048).R;const bt=f.d`<button 
    class="card-see-more"
    title=${t=>t.cardActionsTooltips&&t.cardActionsTooltips.seeMore}
    @click=${(t,e)=>t.toggleCardActionMenu&&t.toggleCardActionMenu(t,e.event)}
    data-t="${t=>{var e,i;return null===(i=null===(e=t.telemetryContext)||void 0===e?void 0:e.seeMore)||void 0===i?void 0:i.getMetadataTag()}}"
    >
        ${ft.Z}
    </button>`,xt=f.d`
    ${(0,mt.rx)((t=>[t.data]),f.d`
        ${(0,C.g)((t=>t.isAdFeedbackV1Enabled&&!!t.feedbackUrl),f.d`
            ${(0,C.g)((t=>!t.isFeedV2),f.d`
                <msn-card-button
                    class="card-button dynamic-styles"
                    select-title=${t=>t.cardActionsTooltips&&t.cardActionsTooltips.seeMore}
                    unselect-icon=${t=>vt.Z}
                    filled-icon-path=${t=>ht.Cp}
                    layout=${t=>(0,ut.Q8)(t)}
                    @selected-state-changed=${(t,e)=>t.toggleCardActionMenu&&t.toggleCardActionMenu(t,e.event)}
                    select-telemetry-tag=${t=>{var e,i;return null===(i=null===(e=t.telemetryContext)||void 0===e?void 0:e.seeMore)||void 0===i?void 0:i.getMetadataTag()}}
                >
                </msn-card-button>
            `)}
            ${(0,C.g)((t=>t.isFeedV2&&t.isHovered),f.d`${bt}`)}
        `)}
    `)}
`;let yt=class extends pt{};yt=(0,a.gn)([(0,h.M)({name:"msn-native-ad-see-more",template:xt,styles:gt})],yt);var Ct=i(19628),wt=i(90351);const $t=t=>{var e;const i=(null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdTrendingTitleText)||"More than {0} people have viewed this product",a=(0,wt.Z)(kt((0,wt.Z)(t,"assets.viewed","")),"viewed","");return Ct.Ld.Format(i,a)},kt=(0,c.Et)(d.Evv,"parseViewedStringToJSON")((t=>{if(!t)return"";let e={};try{e=JSON.parse(t)}catch(t){return""}return e&&e.viewed&&e.comparisonDays?e:""})),Lt=t=>{var e,i;const a=(null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdSaleHighlightTitleText)||"SALE {0}% OFF";return Ct.Ld.Format(a,null===(i=t.assets)||void 0===i?void 0:i.discount)},Tt=t=>{var e,i;const a=(null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdSaleHighlightTitleText)||"SALE {0}% OFF",o=a.split("{0}%"),n=Ct.Ld.Format(a,null===(i=t.assets)||void 0===i?void 0:i.discount),[r,s]=o,l=n.slice(r.length,n.length-s.length);return{prefix:r.trim(),suffix:s.trim(),highlightText:l.trim()}};class St{chain(t){this.nextBuilder=t}build(t,e){const i=this.doBuild(t,e);return this.nextBuilder?this.nextBuilder.build(t,i):i}}(0,a.gn)([(0,c.Et)(d.iJb,"BaseBuilder.Chain")],St.prototype,"chain",null),(0,a.gn)([(0,c.Et)(d.iJb,"BaseBuilder.Build")],St.prototype,"build",null);class Ft extends St{constructor(){super(),this.creatorMap=new Map}registerCreator(t,e){this.creatorMap.set(t,e)}doBuild(t,e){if(this.creatorMap.has(t.name)){return this.creatorMap.get(t.name)(t,e)}return e?f.d`${e}`:f.d`<div></div>`}}(0,a.gn)([(0,c.Et)(d.iJb,"ComponentBuilder.RegisterCreator")],Ft.prototype,"registerCreator",null),(0,a.gn)([(0,c.Et)(d.iJb,"ComponentBuilder.DoBuild")],Ft.prototype,"doBuild",null);class At extends St{doBuild(t,e){if(Array.isArray(t.children)&&t.children.length>0){const e=t.children.map((t=>this.build(t,null))),i=Array(e.length+1).fill("");return i.raw=i,f.d`
                ${(0,mt.rx)((e=>t.children),f.d`
                    ${t=>this.build(t,null)}
                `)}
            `,(0,f.d)(i,...e)}return null}}(0,a.gn)([(0,c.Et)(d.iJb,"ChildrenBuilder.DoBuild")],At.prototype,"doBuild",null);class It extends p.F{constructor(){super(...arguments),this._displayName="MsnBlockLayout"}connectedCallback(){super.connectedCallback()}}(0,a.gn)([w.LO],It.prototype,"layoutConfig",void 0);const Mt=f.d`
    <slot></slot>
`,_t=u.i` 
    :host{
        display: block;
    }
`.withBehaviors(new m.g("layoutStyle"));class jt extends p.F{constructor(){super(...arguments),this._displayName="MsnFlexLayout"}connectedCallback(){super.connectedCallback()}}(0,a.gn)([w.LO],jt.prototype,"layoutConfig",void 0),(0,a.gn)([w.LO],jt.prototype,"layoutStyle",void 0);const Bt=f.d`
    <slot></slot>
`,zt=u.i` 
    :host {
        display: flex;
    }
`.withBehaviors(new m.g("layoutStyle"));class Et extends p.F{constructor(){super(...arguments),this._displayName="MsnPixelLayout"}connectedCallback(){super.connectedCallback()}}(0,a.gn)([w.LO],Et.prototype,"layoutConfig",void 0);const Ht=f.d`
    <slot></slot>
`,Ot=u.i`
    :host {
        position: absolute;
    }
`.withBehaviors(new m.g("layoutStyle")),Dt=f.d`
    <slot></slot>
`,Rt=u.i``.withBehaviors(new m.g("layoutStyle"));let Pt=class extends Et{};Pt=(0,a.gn)([(0,h.M)({name:"msn-pixel-layout",template:Ht,styles:Ot})],Pt);let Zt=class extends jt{};Zt=(0,a.gn)([(0,h.M)({name:"msn-flex-layout",template:Bt,styles:zt})],Zt);let Vt=class extends It{};Vt=(0,a.gn)([(0,h.M)({name:"msn-block-layout",template:Mt,styles:_t})],Vt);let Ut=class extends p.F{};Ut=(0,a.gn)([(0,h.M)({name:"msn-uber-layout",template:Dt,styles:Rt})],Ut);class Nt extends St{doBuild(t,e){if(!t.layout)return e;const i=t.layout;if(!i.mode)return e;switch(i.mode){case"pixel":return function(t,e){return f.d`
        <msn-pixel-layout 
            :layoutConfig=${e=>t}
        >
            ${e}
        </msn-pixel-layout>
    `}(i,e);case"flex":return function(t,e){return f.d`
        <msn-flex-layout 
            :layoutConfig=${e=>t}
        >
            ${e}
        </msn-flex-layout>
    `}(i,e);case"block":return function(t,e){return f.d`
        <msn-block-layout
            :layoutConfig=${()=>t}
        >
            ${e}
        </msn-block-layout>
    `}(i,e);default:return e}}}(0,a.gn)([(0,c.Et)(d.iJb,"LayoutBuilder.DoBuild")],Nt.prototype,"doBuild",null);const Gt=u.i`
    :host {
        display: block;
        height: 100%;
        width: 100%;
    }
`,Wt=f.d`
    <template id="native-ad-telemetry">
        <slot></slot>
    </template>
`;let qt=class extends h.H{constructor(){super(...arguments),this.clickedBeacon=!1,this.clickedTelemetry=!1,this.clickedUserAction=!1,this.telemetryMetadata=""}};(0,a.gn)([(0,l.Lj)({mode:"boolean"})],qt.prototype,"clickedBeacon",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean"})],qt.prototype,"clickedTelemetry",void 0),(0,a.gn)([(0,l.Lj)({mode:"boolean"})],qt.prototype,"clickedUserAction",void 0),(0,a.gn)([l.Lj],qt.prototype,"telemetryMetadata",void 0),qt=(0,a.gn)([(0,h.M)({name:"msn-native-ad-telemetry",template:Wt,styles:Gt})],qt);var Yt=i(36159),Jt=i(38856),Xt={impressionLog:(t,e,i)=>{var a,o,n,r,s,l;const d=null===(l=null===(s=null===(r=null===(n=null===(o=null===(a=null==e?void 0:e.parent)||void 0===a?void 0:a.shadowRoot)||void 0===o?void 0:o.querySelector("msn-native-ad-title"))||void 0===n?void 0:n.shadowRoot)||void 0===r?void 0:r.querySelector(".native-ad-title-wrapper"))||void 0===s?void 0:s.children)||void 0===l?void 0:l[0],c=null==d?void 0:d.scrollHeight,p=null==d?void 0:d.clientHeight;c&&p&&(0,Jt._)(t.id,"nativeAdCardImpression",`${c},${p}`,0,i)},clickLog:(t,e,i)=>{var a,o,n,r,s,l;const d=null===(l=null===(s=null===(r=null===(n=null===(o=null===(a=null==e?void 0:e.parent)||void 0===a?void 0:a.shadowRoot)||void 0===o?void 0:o.querySelector("msn-native-ad-title"))||void 0===n?void 0:n.shadowRoot)||void 0===r?void 0:r.querySelector(".native-ad-title-wrapper"))||void 0===s?void 0:s.children)||void 0===l?void 0:l[0],c=null==d?void 0:d.scrollHeight,p=null==d?void 0:d.clientHeight;c&&p&&(0,Jt._)(t.id,"nativeAdCardClick",`${c},${p}`,0,null==i?void 0:i.target)}};var Kt,Qt={PrgTitle2:Xt,PrgTitle2C:Xt};!function(t){t[t.adChoice=0]="adChoice",t[t.destination=1]="destination",t[t.nativeAdCard=2]="nativeAdCard"}(Kt||(Kt={}));class te extends St{doBuild(t,e){if(t.userActionLogger){const{impressionLog:e,clickLog:i}=Qt[t.userActionLogger]||{};!Yt.Km.clickLog&&i&&(Yt.Km.clickLog=i),!Yt.Km.impressionLog&&e&&(Yt.Km.impressionLog=e)}if(!t.telemetry)return e;const i=t.telemetry,a=!!i.metadata;return f.d`
            <msn-native-ad-telemetry
                data-t="${t=>a?((t,e)=>{if(t&&t.adTelemetryContext&&e in Kt)return t.adTelemetryContext[e].getMetadataTag()})(t,i.metadata):""}"
                ${(0,y.lq)(!!i.clickedBeacon||!!i.clickedTelemetry||!!i.clickedUserAction,!!i.viewedBeacon,!!i.customEvent)}
                clickedBeacon=${!!i.clickedBeacon}
                clickedUserAction=${!!i.clickedUserAction}
                clickedTelemetry=${!!i.clickedTelemetry}
                telemetryMetadata=${i.metadata}
            >
                ${e}
            </msn-native-ad-telemetry>`}}(0,a.gn)([(0,c.Et)(d.iJb,"TelemetryBuilder.doBuild")],te.prototype,"doBuild",null);const ee=new class{constructor(){this.create=(0,r.Z)(this.createInternal),this.layoutBuilder=new Nt,this.telemetryBuilder=new te,this.telemetryBuilder.chain(this.layoutBuilder),this.componentBuilder=new Ft,this.componentBuilder.chain(this.telemetryBuilder),this.rootBuilder=new At,this.rootBuilder.chain(this.componentBuilder)}registerCreator(t,e){this.componentBuilder.registerCreator(t,e)}createInternal(t){return this.rootBuilder.build(t,null)}};ee.registerCreator("ad-title-mask",(t=>f.d`
    <msn-native-ad-title-mask
        :layoutConfig=${e=>null==t?void 0:t.layout}
        id="${t=>t.id}${t=>null==t.index?"":`_${t.index}`}-mask"
        destination-url=${t=>t.destinationUrl}
        title=${t=>t.title}
        tel-metadata=${t=>{var e,i;return null===(i=null===(e=null==t?void 0:t.adTelemetryContext)||void 0===e?void 0:e.destination)||void 0===i?void 0:i.getMetadataTag()}}
        ${(0,y.lq)(!0,!1)}
		component-name="${null==t?void 0:t.name}"
    >
    </msn-native-ad-title-mask>
`)),ee.registerCreator("product-image",(t=>f.d`
    ${(0,C.g)((t=>t.imageData),f.d`
        <msn-native-ad-product-image 
            :layoutConfig=${()=>null==t?void 0:t.layout}
            src=${e=>((t,e)=>{var i,a;return t&&(null===(a=null===(i=e.assets)||void 0===i?void 0:i.transparentImage)||void 0===a?void 0:a.url)?e.assets.transparentImage.url:e.imageData&&e.imageData.source})(null==t?void 0:t.useTransparentImage,e)}
            alt-text=${t=>t.imageData&&t.imageData.altText}
            is-hovered=${t=>t.hoverState&&t.hoverState.isHovered}
            image-mask-on=${()=>(null==t?void 0:t.imageMaskOn)?"on":"off"}
            image-mask-opacity=${()=>null==t?void 0:t.imageMaskOpacity}
            trim-bottom=${()=>null==t?void 0:t.trimBottom}
            object-fit=${()=>(null==t?void 0:t.useTransparentImage)?"contain":"cover"}
            use-drop-shadow=${()=>(null==t?void 0:t.useTransparentImage)&&!(null==t?void 0:t.noDropShadow)}
            use-transparent-background=${()=>null==t?void 0:t.useTransparentImage}
            image-mask-left=${()=>null==t?void 0:t.imageMaskLeft}
            image-mask-top=${()=>null==t?void 0:t.imageMaskTop}
            image-mask-width=${()=>null==t?void 0:t.imageMaskWidth}
            image-mask-height=${()=>null==t?void 0:t.imageMaskHeight}
            id="${t=>t.id}-product-image"
            rlink=${t=>t.destionationUrl}
			component-name=${null==t?void 0:t.name}
            :visualReadinessCallback=${t=>t.visualReadinessCallback}
            enable-native-ad-hover-contrast=${t=>t.enableNativeAdHoverContrast}
            pattern-mode=${()=>null==t?void 0:t.patternMode}
        >
        </msn-native-ad-product-image>
    `)}
`)),ee.registerCreator("gradient-mask",((t,e)=>f.d`
    ${(0,C.g)((t=>t.destinationUrl),f.d`
        <msn-native-gradient-mask
            :layoutConfig=${e=>null==t?void 0:t.layout}
            paddingTop=${t&&t.paddingTop}
            paddingBottom=${t&&t.paddingBottom}
            is-radial-mask=${t&&t.isRadialMask}
            is-full-gradient=${t&&t.isFullGradient}
            use-dynamic-style=${t&&t.useDynamicStyle}
            height=${t&&t.height}
            background="${t&&t.background}"
            @click=${t=>t.destinationUrl&&window.open(t.destinationUrl)}
            ${t&&t.setClickBeacon?(0,y.lq)(!0,!1):""}
			component-name="${null==t?void 0:t.name}"
            use-short-gradient=${t=>t.useShorterGradient}
            pe-seasonal-color-mode=${t&&t.peSeasonalColorMode}
        >
            ${(0,C.g)((()=>e),e)}
        </msn-native-gradient-mask>
    `)}
`)),ee.registerCreator("ad-title",(t=>f.d`
    <msn-native-ad-title
        :layoutConfig=${e=>null==t?void 0:t.layout}
        is-hovered=${t=>t.hoverState&&t.hoverState.isHovered}
        id="${t=>t.id}${t=>null==t.index?"":`_${t.index}`}-ad-title"
        title=${t=>(t=>{var e,i,a;return((null===(e=t.template)||void 0===e?void 0:e.templateType)===V||(null===(i=t.template)||void 0===i?void 0:i.templateType)===U)&&(null===(a=t.assets)||void 0===a?void 0:a.shortTitle)||t.title})(t)}
        destination-url=${t=>t.destinationUrl}
        custom-style=${t&&t.customStyle}
        custom-style-hovered=${null==t?void 0:t.customStyleHovered}
        animation-on=${t=>t.template&&t.template.templateType===H.SI.ContentReveal}
        line-height=${e=>((t,e)=>t&&("infopane"===t.region||"resinfopane"===t.region)&&t.items&&t.items.length>1?28:e&&e.lineHeight)(e,t)}
        font-weight=${e=>((t,e)=>t&&("infopane"===t.region||"resinfopane"===t.region)&&t.items&&t.items.length>1?400:e&&e.fontWeight)(e,t)}
        two-lines-title=${e=>{var i;return(null==t?void 0:t.twoLine)||e.hasAnyInlineDecoration&&!(null==t?void 0:t.oneLineTitle)||(null===(i=e.template)||void 0===i?void 0:i.templateType)===H.SI.TitleMaxLine2||e.adSlugGA}}
        one-line-title=${e=>null==t?void 0:t.oneLineTitle}
        font-family=${e=>((t,e)=>e?e.includes(" ")?`"${e}"`:e:t.fontFamilyOnCardContent||"inherit")(e,null==t?void 0:t.fontFamily)}
        font-size=${e=>((t,e)=>t&&("infopane"===t.region||"resinfopane"===t.region)&&t.items&&t.items.length>1?20:e&&e.titleFontSize)(e,t)||e.feedFontSize}
        is-anaheim-design=${t=>t.isAnaheimDesign}
        is-river-region=${t=>"river"===t.region||"resriver"===t.region||"rightRail"===t.region||"rightrail"===t.region}
        tel-metadata=${t=>{var e,i;return null===(i=null===(e=null==t?void 0:t.adTelemetryContext)||void 0===e?void 0:e.destination)||void 0===i?void 0:i.getMetadataTag()}}
        ${(0,y.lq)(!0,!1)}
        ${(null==t?void 0:t.isFeedV2)?"is-feed-v2":""}
		component-name="${null==t?void 0:t.name}"
    >
    </msn-native-ad-title>
`)),ee.registerCreator("ad-label",(t=>{var e;return f.d`
    ${(0,C.g)((t=>t.privacyUrl),f.d`
        <msn-native-ad-ad-label 
            :layoutConfig=${e=>null==t?void 0:t.layout}
            privacy-url="${t=>t.privacyUrl}"
            ad-label-text-opacity="${null!==(e=null==t?void 0:t.adLabelTextOpacity)&&void 0!==e?e:"0.7"}"
            ad-label-text="${t=>t.adLabelText}"
            type="${e=>J(e,t)}"
            native-ad-ad-label-text="${t=>t.strings&&t.strings.nativeAdAdLabelText}"
            tel-metadata="${t=>{var e,i;return null===(i=null===(e=null==t?void 0:t.adTelemetryContext)||void 0===e?void 0:e.adLabel)||void 0===i?void 0:i.getMetadataTag()}}"
            id="${t=>t.id}-ad-label"
            ${(null==t?void 0:t.isFeedV2)?"is-feed-v2":""}
            ${(null==t?void 0:t.isSeasonal)?"is-seasonal":""}
			component-name="${null==t?void 0:t.name}"
        >
        </msn-native-ad-ad-label>
    `)}
`})),ee.registerCreator("provider-name",(t=>{var e;return f.d`
<msn-native-ad-provider-name
    ${(0,y.lq)(!0,!1)}
    id="${t=>t.id}${t=>null==t.index?"":`_${t.index}`}-ad-provider-name"
    url=${t=>t.destinationUrl}
    provider-name=${t=>t.providerData&&t.providerData.name}
    custom-style-class=${t&&t.customStyleClass}
    ad-slug-ga=${t=>t.adSlugGA}
    tel-metadata=${t=>{var e,i;return null===(i=null===(e=null==t?void 0:t.adTelemetryContext)||void 0===e?void 0:e.destination)||void 0===i?void 0:i.getMetadataTag()}}
    font-family=${e=>((t,e)=>e?e.includes(" ")?`"${e}"`:e:t.fontFamilyOnCardContent||"inherit")(e,null==t?void 0:t.fontFamily)}
    has-elite-badge=${t=>{var e;return!!(null===(e=t.assets)||void 0===e?void 0:e.eliteBadge)}}
    ad-label-text-opacity="${null!==(e=null==t?void 0:t.adLabelTextOpacity)&&void 0!==e?e:"0.7"}"
    ${(null==t?void 0:t.isFeedV2)?"is-feed-v2":""}
    font-size=${null==t?void 0:t.fontSize}
    line-height=${null==t?void 0:t.lineHeight}
    :layoutConfig=${e=>null==t?void 0:t.layout}
    :localizedStrings=${t=>t.localizedStrings}
    color="${null==t?void 0:t.color}"
    font-weight="${null==t?void 0:t.fontWeight}"
	component-name="${null==t?void 0:t.name}"
    ${(null==t?void 0:t.isSeasonal)?"is-seasonal":""}
>
</msn-native-ad-provider-name>
`})),ee.registerCreator("disclaimer",at.Zg),ee.registerCreator("ad-choice",(t=>f.d`
    <msn-native-ad-ad-choice 
        :layoutConfig=${e=>null==t?void 0:t.layout}
        id="${t=>t.id}${t=>null==t.index?"":`_${t.index}`}-ad-choice"
        ad-choice-icon-url=${t=>t.adChoiceIconUrl}
        native-ad-ad-choice-text=${t=>t.strings&&t.strings.nativeAdAdChoiceText}
        ${t.isFeedV2?"is-feed-v2":""}
        tel-metadata=${t=>{var e,i;return null===(i=null===(e=null==t?void 0:t.adTelemetryContext)||void 0===e?void 0:e.adChoice)||void 0===i?void 0:i.getMetadataTag()}}
		:iconStyles=${()=>t.iconStyles}
		component-name="${null==t?void 0:t.name}"
        id="${t=>t.id}-ad-choice"
    >
    </msn-native-ad-ad-choice>
`)),ee.registerCreator("see-more",(t=>f.d`
    <msn-native-ad-see-more
        :layoutConfig=${e=>null==t?void 0:t.layout}
        :data=${e=>Object.assign(Object.assign({},e),{isFeedV2:t&&t.isFeedV2,isHovered:e.hoverState&&e.hoverState.isHovered})}
        data-t="${t=>{var e,i;return null===(i=null===(e=null==t?void 0:t.adTelemetryContext)||void 0===e?void 0:e.seeMore)||void 0===i?void 0:i.getMetadataTag()}}"
		component-name="${null==t?void 0:t.name}"
    >
    </msn-native-ad-see-more>
`)),ee.registerCreator("like-button",(t=>f.d`
    <msn-native-ad-like-button
        :layoutConfig=${e=>null==t?void 0:t.layout}
        native-ad-like-text=${t=>t.strings&&t.strings.nativeAdLikeText}
        native-ad-unlike-text=${t=>t.strings&&t.strings.nativeAdUnLikeText}
        beaconsJson=${t=>t.beaconsJson}
		component-name="${null==t?void 0:t.name}"
    >
    </msn-native-ad-like-button>
`)),ee.registerCreator("call-to-action",(t=>f.d`
    <msn-native-ad-call-to-action 
        text="${t=>(t=>t.template&&t.strings?"prg-ad-cta"===t.template.configType?t.strings.nativeAdBuyNowText:t.strings.nativeAdLearnMoreText:"")(t)}"
        default-background-color="${t&&t.backgroundColor}"
        background-color="${t=>(t=>t.template&&t.layoutColor?"prg-ad-cta"===t.template.configType||"prg-ad-cta-lm"===t.template.configType?"":t.layoutColor:"")(t)}"
        color="${t&&t.color}"
        is-hovered=${t=>t.hoverState&&t.hoverState.isHovered}
        cta-mode=${t&&t.ctaMode||"default"}
        destination-url=${t=>t.destinationUrl}
        tel-metadata=${t=>{var e,i;return null===(i=null===(e=null==t?void 0:t.adTelemetryContext)||void 0===e?void 0:e.destination)||void 0===i?void 0:i.getMetadataTag()}}
        ${t&&"arrow"===t.ctaMode&&(0,y.lq)(!0,!1)}
		component-name="${null==t?void 0:t.name}"
        :layoutConfig=${e=>null==t?void 0:t.layout}
    >
    
    </msn-native-ad-call-to-action>
    `)),ee.registerCreator("trending",(t=>f.d`
    <msn-native-ad-trending
        :layoutConfig=${e=>null==t?void 0:t.layout}
        destination-url="${t=>t.destinationUrl}" 
        title="${t=>t.title}"
        trending-title-text=${$t}
        trending-text="${t=>(0,wt.Z)(t,"localizedStrings.nativeAdTrendingText","Trending")}"
        is-hovered=${t=>t.hoverState&&t.hoverState.isHovered}
        tel-metadata=${t=>{var e,i;return null===(i=null===(e=null==t?void 0:t.adTelemetryContext)||void 0===e?void 0:e.destination)||void 0===i?void 0:i.getMetadataTag()}}
        ${(0,y.lq)(!0,!1)}
		component-name="${null==t?void 0:t.name}"
    >
    </msn-native-ad-trending>
`)),ee.registerCreator("color-mask",(t=>f.d`
<msn-native-ad-color-mask
    opacity=${t&&t.opacity}
    color=${e=>t.feedV2?e.dynamicBackground:e.layoutColor}
    is-show=${e=>t&&t.alwaysPresent||e.hoverState&&e.hoverState.isHovered}
    ${(null==t?void 0:t.feedV2)?"feed-v2":""}
	component-name="${null==t?void 0:t.name}"
    :layoutConfig=${e=>null==t?void 0:t.layout}
>
</msn-native-ad-color-mask>
`)),ee.registerCreator("sale-highlight-badge",(t=>f.d`
    <msn-native-ad-sale-highlight-badge
        :layoutConfig=${e=>null==t?void 0:t.layout}
		component-name="${null==t?void 0:t.name}"
        discount-text="${t=>{var e,i;const a=(null===(e=t.localizedStrings)||void 0===e?void 0:e.nativeAdOnSaleTextCapital)||"{0}% OFF";return Ct.Ld.Format(a,null===(i=t.assets)||void 0===i?void 0:i.discount)}}"
    >
    </msn-native-ad-sale-highlight-badge>
`)),ee.registerCreator("sale-highlight-title",(t=>f.d`
    <msn-native-ad-text
        font-size="60px"
        letter-spacing="-0.015em"
        line-height="100.5%"
        font-family="Segoe UI"
        font-weight="200"
        text="${Lt}"
		component-name="${null==t?void 0:t.name}"
        :layoutConfig=${e=>null==t?void 0:t.layout}
    />
`)),ee.registerCreator("sale-highlight-horizontal-title",(t=>f.d`
    <msn-native-ad-text
        font-size="18px"
        letter-spacing="0.5em"
        line-height="100.5%"
        font-family="Segoe UI"
        font-weight="600"
        has-highlight-text="true"
        highlight-text="${t=>Tt(t).highlightText}"
        highlight-text-prefix="${t=>Tt(t).prefix}"
        highlight-text-suffix="${t=>Tt(t).suffix}"
        highlight-text-style="font-size: 48px; letter-spacing: 0.05em; margin-inline-start: 9px; margin-inline-end: 14px;"
		component-name="${null==t?void 0:t.name}"
        :layoutConfig=${e=>null==t?void 0:t.layout}
    />
`)),ee.registerCreator("div-wrapper",((t,e)=>f.d`
    <msn-native-ad-div-wrapper
        marginLeft=${t&&t.marginLeft}
        marginRight=${t&&t.marginRight}
        marginTop=${t&&t.marginTop}
        marginBottom=${t&&t.marginBottom}
        width=${t&&t.width}
        marginInline=${t&&t.marginInline}
        ${t&&t.setClickBeacon?(0,y.lq)(!0,!1):""}
		component-name="${null==t?void 0:t.name}"
    >
        ${e}
    </msn-native-ad-div-wrapper>
`)),ee.registerCreator("free-shipping",(t=>f.d`
    <decoration-free-shipping-button
        font-family=${e=>((t,e)=>e?e.includes(" ")?`"${e}"`:e:t.fontFamilyOnCardContent||"inherit")(e,null==t?void 0:t.fontFamily)}
        color=${t.color}
        icon=${t.icon}
        data=${t=>(0,wt.Z)(t.localizedStrings,"nativeAdFreeShippingText")}
		component-name="${null==t?void 0:t.name}"
        :layoutConfig=${e=>null==t?void 0:t.layout}
    >
    </decoration-free-shipping-button>
`)),ee.registerCreator("rating",(t=>f.d`
    <decoration-rating
        color=${t.color}
        elementStyle=${()=>t.elementStyle}
        elementSize=${t.elementSize}
        rating=${t=>t.assets&&t.assets.rating}
        review-data=${t=>t.assets.review}
        is-show-review=${t.displayReviewCount}
        font-family=${e=>((t,e)=>e?e.includes(" ")?`"${e}"`:e:t.fontFamilyOnCardContent||"inherit")(e,null==t?void 0:t.fontFamily)}
		component-name="${null==t?void 0:t.name}"
        :layoutConfig=${e=>null==t?void 0:t.layout}
    >
    </decoration-rating>
`)),ee.registerCreator("special-offer",(t=>f.d`
    <msn-native-ad-special-offer
        :localizedStrings=${t=>t.localizedStrings}
        displayed-text="${t=>t.assets.specialOffer.displayedText}"
        promotional-text="${t=>t.assets.specialOffer.promotionalText}"
        redemption-code="${t=>t.assets.specialOffer.redemptionCode}"
        days-from-expiration="${t=>t.assets.specialOffer.daysFromExpiration}"
        destination-url="${t=>t.assets.specialOffer.destinationURL}"
        margin-left="-6"
        is-dr-config=${t&&t.isDrConfig}
        ${(0,y.lq)(!0,!1)}
		component-name="${null==t?void 0:t.name}"
        :layoutConfig=${e=>null==t?void 0:t.layout}
    >
    </msn-native-ad-special-offer>
`)),ee.registerCreator("ad-full-card-gradient",((t,e)=>f.d`
    <msn-native-ad-full-card-gradient 
        pattern-mode="${null==t?void 0:t.patternMode}"
        :layoutConfig=${e=>null==t?void 0:t.layout}
    >
        ${(0,C.g)((()=>e),e)}
    </msn-native-ad-full-card-gradient>
`));var ie=i(18335),ae=i(13400),oe=i(63045);const ne=o.DI.getOrCreateDOMContainer(),re=window.matchMedia("(prefers-color-scheme: dark)");let se,le;function de(){ne.register(o.YM.instance(n.l,Object.assign(Object.assign({},this.strings),se))),this.adBackgroundColor=(null==re?void 0:re.matches)?"#2E2E2E":"#FFFFFF",null==re||re.addEventListener("change",this.themeModeSwitchHandler)}class ce extends h.H{constructor(){super(),this.adBackgroundColor="",this.hoverState={isHovered:!1,isDecorationLinesExpanded:!1},(0,w.LO)(this.hoverState,"isHovered"),(0,w.LO)(this.hoverState,"isDecorationLinesExpanded")}get componentFactory(){return ee}themeModeSwitchHandler(){this.adBackgroundColor=(null==re?void 0:re.matches)?"#2E2E2E":"#FFFFFF"}connectedCallback(){var t,e;if(this.configRef&&!se){const i=null===(t=ie.U.getInstance())||void 0===t?void 0:t.getConfigResolver(),a=null===(e=null==i?void 0:i.tryGetConfigSync)||void 0===e?void 0:e.call(i,this.configRef);ae.jG.ConfigOrigins.feature===oe.w.Local&&ie.U.getConfig(this.configRef).then((t=>{le=null==t?void 0:t.properties,se=null==le?void 0:le.localizedStrings})),le=null==a?void 0:a.properties,se=null==le?void 0:le.localizedStrings}super.connectedCallback(),de.call(this)}get wcData(){if(this.adData&&this.adData.adLabelText){const t=Object.assign(Object.assign({},this.config),le),e=Object.assign(Object.assign(Object.assign({},this.localizedStrings),this.strings),se);return s(this.adData,t,e)}return null}disconnectedCallback(){null==re||re.removeEventListener("change",this.themeModeSwitchHandler)}}(0,a.gn)([w.LO],ce.prototype,"adData",void 0),(0,a.gn)([w.LO],ce.prototype,"isInfopane",void 0),(0,a.gn)([w.LO],ce.prototype,"adBackgroundColor",void 0),(0,a.gn)([w.LO],ce.prototype,"localizedStrings",void 0),(0,a.gn)([w.LO],ce.prototype,"configRef",void 0);var pe=i(88087),ge=i(64553);const he=t=>{var e;return(null===(e=null==t?void 0:t.template)||void 0===e?void 0:e.dynamicRenderingConfig)||pe.$},ue=(t,e)=>{const i=parseInt((null!=e?e:"#2E2E2E").slice(1),16);return`rgba(${i>>16&255},${i>>8&255},${255&i},${t})`},me=(0,r.Z)((t=>ue(.8,t))),ve=(0,r.Z)((t=>ue(0,t))),fe=t=>he(t.wcData).cardStyles||{};var be,xe=i(26755);!function(t){t.defaultRiverGradient="#2E2E2E",t.defaultRiverBackground="#FFFFFF",t.defaultInfopaneGradient="#000000",t.defaultInfopaneBackground="#FFFFFF",t.zIndexV2OriginalBackground="transparent"}(be||(be={}));const ye=t=>{var e;return(null===(e=t.adData)||void 0===e?void 0:e.enableAdsColorBleed)?t.adData.adBackgroundColor:Ce(t)},Ce=t=>{var e,i,a,o,n;const r=he(t.wcData);if(r.layoutColor)return r.layoutColor;const s=null===(i=null===(e=t.adData)||void 0===e?void 0:e.template)||void 0===i?void 0:i.templateType;return(s===H.SI.ZIndexV2Polygon||s===H.SI.ZIndexV2Original||s===H.SI.SaleHighlightV3||s===H.SI.SaleHighlightV4)&&(null===(a=t.adData)||void 0===a?void 0:a.layoutColor)&&(null===(n=null===(o=t.adData)||void 0===o?void 0:o.assets)||void 0===n?void 0:n.transparentImage)?t.adData.layoutColor:[H.SI.PESeasonalAds,H.SI.PESeasonalAdsV1,H.SI.PESeasonalAdsV1P].includes(s)?t.adBackgroundColor:""},we=f.d`
    <style>
    :host {
        height: 304px;
        width: 100%;
        position: relative;
        overflow: hidden;
        border-radius: calc(${xe.rSr} * 1px);
        box-shadow: 0 0 3px lightgrey;
    }

    :host(msn-native-ad-dr), :host(native-ad-wc) {
        ${t=>(t=>{const e=fe(t),i=[];null==e.borderColor&&null==e.borderWidth||i.push("border-style:solid");const a=["backgroundColor","borderColor","borderWidth","height","boxShadow","borderRadius","fontFamily"];return Object.keys(e).forEach((t=>{null!=e[t]&&a.includes(t)&&i.push((0,ot._t)(t,e[t]))})),i.length?`${i.join(";")};`:""})(t)}
    }

    @media (prefers-color-scheme: dark) {
        :host{
            box-shadow: 0 0 3px black;
        }
    }
    </style>
    <fluent-card
        @mouseenter=${t=>t.hoverState.isHovered=!0}
        @mouseleave=${t=>t.hoverState.isHovered=!1}
        style="
            background-color: ${t=>(t=>{var e,i;return(null===(i=null===(e=t.adData)||void 0===e?void 0:e.template)||void 0===i?void 0:i.templateType)===H.SI.ZIndexV2Original?be.zIndexV2OriginalBackground:be.defaultRiverBackground})(t)};
            grid-area:${t=>{var e;return null===(e=t.adData)||void 0===e?void 0:e.grid_area}};
            --ad-background-color: ${t=>ye(t)||be.defaultRiverGradient};
            --gradient-mid-color: ${t=>me(ye(t)||be.defaultRiverGradient)};
            --gradient-end-color: ${t=>ve(ye(t)||be.defaultRiverGradient)};
            ${t=>(t=>{const e=fe(t);let i="";return null==e.borderRadius&&null==e.borderWidth||(i+="border-radius: 0;"),null!=e.backgroundColor&&(i+=`background-color: ${e.backgroundColor};`),i})(t)}
        "
        class="${t=>{var e;return null===(e=t.adData)||void 0===e?void 0:e.cardSize}}"
        card-fill-color="${t=>{var e;return Ce(t)||(null===(e=t.adData)||void 0===e?void 0:e.adBackgroundColor)}}"
    >
        ${(0,mt.rx)((t=>{var e;return[Object.assign(Object.assign({},t.wcData),{visualReadinessCallback:null===(e=t.adData)||void 0===e?void 0:e.visualReadinessCallback,hoverState:t.hoverState,componentFactory:t.componentFactory})]}),f.d`
            ${t=>t.componentFactory.create(he(t))}
        `)}
    </fluent-card>
`,$e=f.d`
    <div
        @mouseenter=${t=>t.hoverState.isHovered=!0}
        @mouseleave=${t=>t.hoverState.isHovered=!1}
        style="
            contain: content;
            height: 100%;
            background-color: ${t=>be.defaultInfopaneBackground};
            grid-area:${t=>{var e;return null===(e=t.adData)||void 0===e?void 0:e.grid_area}}; 
            --ad-background-color: ${t=>be.defaultInfopaneGradient};
            --gradient-mid-color: ${t=>me(be.defaultInfopaneGradient)};
            --gradient-end-color: ${t=>ve(be.defaultInfopaneGradient)};
            --neutral-foreground-rest: ${t=>be.defaultInfopaneBackground};
        "
        class="${t=>{var e;return null===(e=t.adData)||void 0===e?void 0:e.cardSize}}"
        card-fill-color="${t=>{var e;return null===(e=t.adData)||void 0===e?void 0:e.adBackgroundColor}}"
    >
        ${(0,mt.rx)((t=>[Object.assign(Object.assign({},t.wcData),{hoverState:t.hoverState,componentFactory:t.componentFactory})]),f.d`
            ${t=>t.componentFactory.create((t=>{var e;return(null===(e=null==t?void 0:t.template)||void 0===e?void 0:e.dynamicRenderingConfig)||ge.v})(t))}
        `)}
    </div>
`,ke=f.d`
    <style>
    :host {
        grid-area:${t=>{var e;return null===(e=t.adData)||void 0===e?void 0:e.grid_area}};
        border-radius: 6px;
        box-shadow: 0 0 3px lightgrey;
        background-color: ${be.defaultRiverGradient};
    }
    @media (prefers-color-scheme: dark) {
        :host{
            box-shadow: 0 0 3px black;
        }
    }
    </style>
    <div></div>
`,Le=f.d`
    ${(0,C.g)((t=>t.wcData),(t=>t.isInfopane?$e:we))}
    ${(0,C.g)((t=>!t.wcData),ke)}
`,Te=u.i`
`;let Se=class extends ce{};Se=(0,a.gn)([(0,h.M)({name:"msn-native-ad-wc",template:Le,styles:Te}),(0,c.uj)(d.EoX,"msn-native-ad-wc")],Se)},63039:function(t,e,i){i.d(e,{G:function(){return lt}});var a=i(33940),o=i(89346),n=i(87697),r=i(65620),s=i(98780);class l extends o.H{constructor(){super(...arguments),this.showColored=!1}optionsChanged(){this.config=this.options.config,this.data=this.options.data,this.config.localizedStrings=this.config.localizedStrings||{}}connectedCallback(){super.connectedCallback(),(0,s.R)().observeCard(this.articleCard)}}(0,a.gn)([n.LO],l.prototype,"data",void 0),(0,a.gn)([n.LO],l.prototype,"options",void 0),(0,a.gn)([(0,r.Lj)({mode:"boolean"})],l.prototype,"showColored",void 0);var d=i(40082),c=i(64434),p=i(53046),g=i(22674);const h=p.i`
.card-button {
    border-radius: 100%;
}

.no-back-plate .card-button:not(:hover) {
    background: transparent;
}

.offset-engagement-badge {
    left: calc(var(--msft-article-padding) * 1px + 24px);
}

msft-article-card [slot='content-indicator'] {
    pointer-events: none;
}

msft-article-card msft-article::part(heading):after {
    top: calc(100% - var(--top-gap));
}

msft-article.no-image::part(article) {
    background-color: var(--article-background-color);
}

msft-article.no-image::part(heading) {
    font-size: var(--msft-article-heading-font-size, 20px);
    line-height: var(--msft-article-heading-line-height, 28px);
}

msft-article-card[size="_1x_2y"] msft-article.no-image msft-attribution {
    margin-bottom: 18px;
}

msft-article-card[size="_2x_2y"] msft-article.no-image msft-attribution {
    margin-bottom: 50px;
}

msft-article.long-gradient::part(gradient) {
    top: -55px;
}

msft-article span.title_1x_2y,
msft-article span.title_2x_2y {
    font-size: 20px;
}

msft-article.image-hoverZoom::part(gradient) {
    bottom: 53px;
}

msft-article.abstract-showHide::part(gradient) {
    top: 56px;
    bottom: 36px;
}

msft-article-card[size="_2x_2y"] msft-article.image-hoverZoom::part(gradient) {
    bottom: 0px;
}

msft-article.image-hoverZoom {
    --image-zoom-delay-duration: 666ms;
    --image-zoom-away-delay-duration: 500ms;
    --image-zoom-gradient-delay-duration: 400ms;
    --image-zoom-away-gradient-delay-duration: 100ms;
}

msft-article.image-hoverZoom::part(image),
msft-article.image-hoverZoom::part(gradient) {
    transition-property: transform;
    transition-duration: 2500ms;
    transition-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
}

msft-article.image-hoverZoom::part(image) {
    transform: scale(1.1);
    transform-origin: top;
    transition-delay: var(--image-zoom-away-delay-duration);
}

msft-article.image-hoverZoom::part(gradient) {
    transition-delay: var(--image-zoom-away-gradient-delay-duration);
}

msft-article-card:hover msft-article.image-hoverZoom::part(image),
msft-article-card:focus-within msft-article.image-hoverZoom::part(image) {
    transform: scale(1);
    transition-delay: var(--image-zoom-delay-duration);
}

msft-article-card[size="_1x_2y"]:hover msft-article.image-hoverZoom::part(gradient),
msft-article-card[size="_1x_2y"]:focus-within msft-article.image-hoverZoom::part(gradient) {
    transform: translateY(-24px);
    transition-delay: var(--image-zoom-gradient-delay-duration);
}

msft-article.abstract-showHide {
    --hover-abstract-title-delay-duration: 666ms;
    --hover-abstract-delay-duration: 800ms;
    --hover-abstract-away-delay-duration: 333ms;
    --hover-abstract-away-transition-duration: 333ms;
    --hover-abstract-duration: 1000ms;
}

msft-article.abstract-showHide::part(text),
msft-article.abstract-showHide::part(gradient),
msft-article.abstract-showHide::part(actions) {
    transition-property: transform;
    transition-duration: 500ms;
    transition-delay: var(--hover-abstract-away-delay-duration);
    transition-timing-function: cubic-bezier(0,0,0,1);
}

msft-article.abstract-showHide::part(text) {
    transform: translateY(40px);
}

msft-article.abstract-showHide::part(abstract) {
    opacity: 0;
    transition-property: transform, opacity;
    transition-duration: var(--hover-abstract-away-transition-duration);
    transition-delay: 0ms;
    transition-timing-function: cubic-bezier(0,0,0,1);
    height: 60px;
}

msft-article.abstract-showHide::part(gradient) {
    transform: translateY(-81px);
}

msft-article.abstract-showHide::part(actions) {
    width: 100%;
    position: absolute;
    bottom: 0px;
    padding: 0 16px;
    box-sizing: border-box;
    transform: translateY(-56px);
    z-index: ${c.K.Above.toString()};
}

msft-article-card:hover msft-article.abstract-showHide::part(text),
msft-article-card:focus-within msft-article.abstract-showHide::part(text) {
    transform: translateY(-31px);
    transition-delay: var(--hover-abstract-title-delay-duration);
}

msft-article-card:hover msft-article.abstract-showHide::part(gradient),
msft-article-card:focus-within msft-article.abstract-showHide::part(gradient) {
    transform: translateY(-10px);
    transition-delay: var(--hover-abstract-title-delay-duration);
}

msft-article-card:hover msft-article.abstract-showHide::part(actions),
msft-article-card:focus-within msft-article.abstract-showHide::part(actions) {
    transform: translateY(15px);
    transition-delay: var(--hover-abstract-title-delay-duration);
}

msft-article-card:hover msft-article.abstract-showHide::part(abstract),
msft-article-card:focus-within msft-article.abstract-showHide::part(abstract) {
    transform: translateY(0px);
    opacity: 1;
    transition-duration: var(--hover-abstract-duration);
    transition-delay: var(--hover-abstract-delay-duration);
}

msft-article.abstract-showHide.image-hoverZoom::part(gradient) {
    bottom: 10px;
}

msft-article-card:hover msft-article.abstract-showHide.image-hoverZoom::part(gradient),
msft-article-card:focus-within msft-article.abstract-showHide.image-hoverZoom::part(gradient) {
    transform: translateY(-16px);
    transition-delay: var(--hover-abstract-title-delay-duration);
}

msft-article-card msft-article.title-font-size {
    --msft-article-heading-line-height: 24px;
}

msft-article-card msft-article.title-font-size::part(attribution) {
    height: 28px;
}

msft-article-card[size="_1x_2y"] msft-article.title-font-size:not(.no-image)::part(heading) {
    margin-bottom: 11px;
}

msft-article-card[size="_1x_2y"] msft-article.title-font-size:not(.no-image)::part(gradient) {
    background: linear-gradient(180deg, transparent 0%, var(--gradient-mid-color) 46%, var(--gradient-color) 100%);
    top: 5px;
}
`.withBehaviors(new g.O(p.i`
            msft-article.abstract-showHide::part(actions) {
                left: 0;
            }
            msft-article-card[size="_2x_2y"] msft-article.image-43:not(.no-image)::part(gradient) {
                background: linear-gradient(270deg, transparent 0%, var(--gradient-mid-color) 55px, var(--gradient-color) 120px);
                width: 347px;
            }
        `,p.i`
            msft-article.abstract-showHide::part(actions) {
                right: 0;
            }
            msft-article-card[size="_2x_2y"] msft-article.image-43:not(.no-image)::part(gradient) {
                background: linear-gradient(90deg, transparent 0%, var(--gradient-mid-color) 55px, var(--gradient-color) 120px);
                width: 347px;
            }
        `),(0,d.vF)(p.i`
            .card-button {
                background: none;
            }

            msn-social-bar::part(button-bg),
            msn-social-bar::part(reactions-count-button),
            msn-social-bar::part(comments-count-button) {
                color: buttontext;
                background-color: buttonface;
            }

            msn-social-bar::part(button-bg):hover,
            msn-social-bar::part(button-bg):focus-visible,
            msn-social-bar::part(reactions-count-button):hover,
            msn-social-bar::part(reactions-count-button):focus-visible,
            msn-social-bar::part(comments-count-button):hover,
            msn-social-bar::part(comments-count-button):focus-visible {
                color: buttonface;
                background-color: highlight;
            }
        `));var u=i(39181),m=i(11684),v=i(39725),f=i(79844),b=i(36764),x=i.n(b),y=i(80709),C=i(27035),w=i(90652);class $ extends o.H{constructor(){super(...arguments),this.iconName=m.gZ.TRENDING,this.showColored=!1}connectedCallback(){super.connectedCallback(),this.showColored&&this.classList.add("colored-"+this.iconName.toLowerCase())}getIconSlot(t){switch(null==t?void 0:t.toLowerCase()){case m.gZ.TRENDING.toLowerCase():return u.d`<slot name="icon">${C.Z}</slot>`;case m.gZ.HOT.toLowerCase():return u.d`<slot name="icon">${v.Z}</slot>`;case m.gZ.VIEWS.toLowerCase():return u.d`<slot name="icon">${w.Z}</slot>`;case m.gZ.LOCAL.toLowerCase():return u.d`<slot name="icon">${f.Z}</slot>`;case m.gZ.EXPLICITLIKE.toLowerCase():return u.d`<slot name="icon">${y.Z}</slot>`;case m.gZ.FOLLOWEDTREATMENT.toLowerCase():return u.d`<slot name="icon" class="treatment-one">${x()}</slot>`;case m.gZ.FOLLOWEDTREATMENTTOPIC.toLowerCase():case m.gZ.FOLLOWEDTREATMENTPUBLISHER.toLowerCase():return u.d`<slot name="icon" class="treatment-two">${x()}</slot>`;default:return""}}}(0,a.gn)([r.Lj],$.prototype,"iconName",void 0),(0,a.gn)([(0,r.Lj)({mode:"boolean"})],$.prototype,"showColored",void 0);var k=i(26755),L=i(67020),T=i(15933);const S=p.i`
    :host::after {
        transform: translateX(-100%) translateX(20px);
    }
`,F=p.i`
    :host::after {
        transform: translateX(100%) translateX(-20px);
    }
`,A=p.i`
    :host {
        color: #000;
    }
    :host::after {
        background: rgba(255, 255, 255, 0.46);
    }
    :host(.colored-opinion) {
        background: rgba(255, 255, 255, 0.55);
    }
    :host(.colored-local),
    :host(.colored-explicitlike) {
        background: white;
        color: black;
    }
    :host(.colored-local) .icon-container {
        fill: #3D6CDC;
    }    
    :host(.colored-followed),
    :host(.colored-followedtopic),
    :host(.colored-followedpublisher) {
        background: #FFFFFF;
        color: rgba(0, 0, 0, 0.83);
    }
`,I=p.i`
    :host {
        color: #fff;
    }
    :host::after {
        background: rgba(0, 0, 0, 0.54);
    }
    :host(.colored-opinion) {
        background: rgba(0, 0, 0, 0.54);
        color: white;
    }
    :host(.colored-local),
    :host(.colored-explicitlike) {
        background: white;
        color: black;
    }
    :host(.colored-local) .icon-container {
        fill: #3D6CDC;
    }
    :host(.colored-followed),
    :host(.colored-followedtopic),
    :host(.colored-followedpublisher) {
        background: rgba(0, 0, 0, 0.83);
        color: #FFFFFF;
    }
`,M=p.i`
    ${(0,L.j)("inline-flex")} :host {
        align-items: center;
        box-sizing: border-box;
        contain: content;
        overflow: hidden;
    }

    .label-container {
        overflow: hidden;
        margin-bottom: 2px;
    }

    :host {
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 2px 4px;
        column-gap: 4px;
        position: absolute;
        height: 20px;
        background: rgba(0, 0, 0, 0.54);
        color: white;
    }

    .icon-container, .label {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    :host(.colored-local) .icon-container {
        stroke: unset;
        fill-opacity: 1.0;
    }

    :host(.colored-trending) {
        background: linear-gradient(268.52deg, #A050C6 0.06%, #6D93E9 100%);
    }

    :host(.colored-hot) {
        background: linear-gradient(283.89deg, #F44141 0%, #EA7928 100%);
    }

    :host(.colored-hot) .icon-container {
        fill-opacity: 1.0;
    }

    :host(.colored-views) {
        background: linear-gradient(298.24deg, #632E7C -27.07%, #E56565 100%);
    }

    :host(.colored-explicitlike) .icon-container {
        fill-opacity: 1.0;
        fill: #3A9EFE;
        stroke: unset;
    }

    :host(.colored-followed) .icon-container,
    :host(.colored-followedtopic) .icon-container,
    :host(.colored-followedpublisher) .icon-container{
        fill: #FFB900;
        stroke: #FFB900;
    }
    
    :host(.colored-followed) .label,
    :host(.colored-followedtopic) .label,
    :host(.colored-followedpublisher) .label{
        text-transform: none;
    }
    
    
    :host(.colored-explicitlike) .label {
        text-transform: unset;
    }

    :host(.offset-engagement-badge) {
        left: calc(var(--msft-article-padding) * 1px + 24px) !important;
    }

    .label {
        font-family: ${k.SVJ};
        font-size: ${k.sNp};
        text-transform: uppercase;
        font-weight: 600;
        line-height: ${k.vgC};
        text-overflow: ellipsis;
    }
`.withBehaviors(new g.O(S,F),(0,d.vF)(p.i`
            :host {
                forced-color-adjust: auto;
            }
            ::slotted([slot="icon"]) {
                color: ${T.H.ButtonText};
                fill: currentcolor;
            }
            .icon-container,
            .label {
                background: ${T.H.ButtonFace};
                color: ${T.H.ButtonText};
                fill: currentcolor;
            }
        `),(0,d.Uu)(I),(0,d.zw)(A));var _=i(13988);const j=u.d`
    ${(0,_.g)((t=>t.getIconSlot(t.iconName)),u.d`
        <span class="icon-container" part="icon-container" aria-hidden="true">
            ${t=>t.getIconSlot(t.iconName)}
        </span>
    `)}
    <span class="label-container" part="label-container">
        <span class="label" part="label">
            <slot></slot>
        </span>
    </span>
`;let B=class extends ${};B=(0,a.gn)([(0,o.M)({name:"msn-content-badge",template:j,styles:M,shadowOptions:{delegatesFocus:!0}})],B);var z,E=i(58952),H=i(38904),O=i(58958);!function(t){t.Long="long",t.Short="short"}(z||(z={}));const D=u.d`
<msft-article-card class=${t=>t.data.enablePreconsumption?"abstractHover":""}
    card-fill-color="${t=>R(t)}"
    size="${t=>t.data.cardSize}"
>
    <msft-article
        ${(0,E.i)("articleCard")}
        style="--article-background-color: ${t=>R(t)}; --top-gap: ${t=>P(t)}px; ${t=>K(t)} ${t=>V(t)}"
        id="contentcard_${t=>t.data.id}"
        href=${t=>t.data.destinationUrl}
        target=${t=>Y(t)}
        title=${t=>Z(t)}
        class="${t=>U(t)}"
        :anchorTelemetryTag=${t=>t.data.telemetryContext&&t.data.telemetryContext.destination&&t.data.telemetryContext.destination.getMetadataTag()}
        @mouseover="${(t,e)=>(0,H.yX)(e.event)}"
        @mouseleave="${(t,e)=>(0,H.ou)(e.event)}"
        @click="${(t,e)=>(0,H.WV)(e.event)}"
        data-badge-type="${t=>J(t)}"
    >
        <slot name="content-indicator" slot="content-indicator"></slot>
        ${(0,_.g)((t=>t.data.imageData),u.d`
            <img
                slot="image"
                alt="${t=>t.data.imageData.altText}"
                src="${t=>t.data.imageData.source}"
                height="${t=>t.data.imageData.imageHeight}"
                width="${t=>t.data.imageData.imageWidth}"
                @load="${t=>t.data.imageData.visualReadinessCallback&&t.data.imageData.visualReadinessCallback()}"
            />
        `)}
        <slot name="card-title-slot"></slot>
        ${(0,_.g)((t=>!t.data.feedFontSize),u.d`
            ${(0,_.g)((t=>!t.data.useLargeFontSize),u.d`
                ${(0,_.g)((t=>t.data.enableTextUnderlineOnlyOnTextHover),u.d`<a class="exp-title">${t=>t.data.title}</a>`)}
                ${(0,_.g)((t=>!t.data.enableTextUnderlineOnlyOnTextHover),u.d`${t=>t.data.title}`)}
            `)}
            ${(0,_.g)((t=>t.data.useLargeFontSize),u.d`<span class="title${t=>t.data.cardSize}">${t=>t.data.title}</span>`)}
        `)}
        ${(0,_.g)((t=>N(t)),(t=>{const e=t.data.metadata&&t.data.metadata.engagementSummary&&t.data.metadata.engagementSummary.badges&&t.data.metadata.engagementSummary.badges.length&&t.data.metadata.engagementSummary.badges[0];let i=e&&e.type;const a=t.config.enablePopularityBadgeColor;if(i===m.gZ.VIEWS.toLowerCase()&&(i=t.config.popularityBadgeLabels.views),e)return W(e.type,i,a)}))}
        ${(0,_.g)((t=>G(t)),u.d`
            <p slot="abstract">${t=>t.data.abstract}</p>
        `)}
        ${(0,_.g)((t=>t.data.providerData),u.d`
            <msft-attribution slot="attribution">
                ${(0,_.g)((t=>t.data.providerData.logoImage),u.d`
                    <img slot="image" src="${t=>t.data.providerData.logoImage}" alt="${t=>t.data.providerData.name}" />
                `)}
                ${(0,_.g)((t=>t.data.providerData.name),u.d`<span style="unicode-bidi:embed">${t=>t.data.providerData.name}</span>`)}
                ${(0,_.g)((t=>t.data.providerData.name&&t.data.publishedDateTime),u.d` · `)}
                ${(0,_.g)((t=>t.data.publishedDateTime),u.d`${t=>t.data.publishedDateTime}`)}
            </msft-attribution>
        `)}
        <slot name="start-action" slot="start-action"></slot>
        <slot name="end-action" slot="end-action"></slot>
        <slot name="hide-story" slot="hide-story"></slot>
    </msft-article>
</msft-article-card>
`,R=t=>{var e,i;return null===(i=null===(e=t.data.articleCardBackgroundColor)||void 0===e?void 0:e.find((t=>t.isDarkMode===(0,O.Y)())))||void 0===i?void 0:i.hexColor},P=t=>t.data.fixedCardHeight?304:292+(t.data.layoutGap||12),Z=t=>t.config&&t.config.disableCardAltText?"":t.data.title,V=t=>t.data.useTitleFontSize?`--msft-article-heading-font-size: ${t.data.useTitleFontSize}px;`:"",U=t=>{let e="";return t.data.imageData||(e+="no-image "),t.data.gradientType===z.Long&&(e+="long-gradient "),t.data.enableImageHoverZoom&&(e+="image-hoverZoom "),t.data.enablePreconsumption&&G(t)&&(e+=" abstract-showHide"),t.data.useTitleFontSize&&(e+=" title-font-size"),t.data.isImage43&&(e+=" image-43"),e},N=t=>(t.config.enablePopularityBadgeColor||t.config.enablePopularityBadgeGrey)&&t.config&&t.config.popularityBadgeLabels&&t.data.cardSize===Q._1x_2y,G=t=>t.data.abstract,W=(t="trending",e="Trending",i=!0)=>u.d`
    <msn-content-badge
        slot="content-indicator"
        iconName=${t}
        showColored=${i}
        class=${t=>X(t)}
    >
        ${e}
    </msn-content-badge>
`,q=function(){let t=null;return function(){if("boolean"!=typeof t)try{t=window.self!==window.top}catch(e){t=!0}return t}}(),Y=t=>t.openLinksInNewTab||t.openArticleInNewTab?"_blank":t.config.openIFrameLinksInTop&&q()?"_top":"_self",J=t=>{const e=t.data.metadata&&t.data.metadata.engagementSummary&&t.data.metadata.engagementSummary.badges&&t.data.metadata.engagementSummary.badges.length&&t.data.metadata.engagementSummary.badges[0];return e&&e.type},X=t=>t.data.contentIndicator&&(t.data.cardSize!==Q._1x_1y||t.data.imageData)?"offset-engagement-badge":"",K=t=>{let e="";const{hoverAbstractAnimationDelay:i,hoverAbstractAnimationDuration:a,hoverAbstractTitleAnimationDelay:o,hoverAwayAbstractAnimationDelay:n,hoverAwayAbstractAnimationDuration:r,imageZoomAnimationDelay:s,imageZoomAwayAnimationDelay:l}=t.config;return i&&(e+=`--hover-abstract-delay-duration: ${i}ms; `),a&&(e+=`--hover-abstract-duration: ${a}ms; `),o&&(e+=`--hover-abstract-title-delay-duration: ${o}ms; `),n&&(e+=`--hover-abstract-away-delay-duration: ${n}ms; `),r&&(e+=`--hover-abstract-away-transition-duration: ${r}ms; `),s&&(e+=`--image-zoom-delay-duration: ${s}ms; `),l&&(e+=`--image-zoom-away-delay-duration: ${l}ms; `),e};var Q;!function(t){t._1x_1y="_1x_1y",t._1x_2y="_1x_2y",t._1x_3y="_1x_3y",t._1x_4y="_1x_4y",t._1x_5y="_1x_5y",t._2x_1y="_2x_1y",t._2x_2y="_2x_2y",t._2x_3y="_2x_3y",t._3x_1y="_3x_1y",t._3x_2y="_3x_2y",t._4x_1y="_4x_1y",t._4x_2y="_4x_2y",t._5x_1y="_5x_1y",t._5x_2y="_5x_2y"}(Q||(Q={}));var tt=i(63070),et=i(42582),it=i(61977),at=i(76445),ot=i(33064),nt=i(40184),rt=i(27126),st=i(57905);let lt=class extends l{};lt=(0,a.gn)([(0,o.M)({name:"msn-preconsumption-article-card",template:D,styles:h,shadowOptions:{delegatesFocus:!0}})],lt),(0,tt.z)().withShadowRootMode("closed").withElementDisambiguation((()=>st.h.ignoreDuplicate)).register((0,et.ay)(),(0,it.hb)()),st.K.getOrCreate().withShadowRootMode("open").withElementDisambiguation((()=>st.h.ignoreDuplicate)).withPrefix("msft").register((0,at.B4)(),(0,ot.MJ)(),(0,nt.Uk)(),(0,rt.PY)())},48906:function(t,e,i){i.d(e,{g:function(){return x}});var a=i(33940),o=i(89346),n=i(65620);class r extends o.H{}(0,a.gn)([n.Lj],r.prototype,"userSubscriptionData",void 0),(0,a.gn)([n.Lj],r.prototype,"cardSize",void 0);var s=i(53046),l=i(58958),d=i(26755);const c=s.i`
.badge {
    border-radius: 4px;
    font-size: 8px;
}
.badge svg {
    margin-inline-end: 6px;
}
.true {
    background: linear-gradient(90deg, #5051D1 0%, #797AF5 100%);
    padding: 2px 6px 3px 8px;
    color: #FFFFFF;
}
.false {
    background: ${(0,l.Y)()?"linear-gradient(90deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.78) 100%)":"linear-gradient(90deg, rgba(0, 0, 0, 0.64) 0%, rgba(0, 0, 0, 0.46) 100%)"};
    display: flex;
    padding: 2px 6px 3px 8px;
    color: ${d.RJY};
}
._1x_2y {
    display: inline-flex;
    margin-bottom: 6px;
}
._2x_2y {
    position: absolute;
    top: 16px;
}
`;var p=i(39181),g=i(13988);const h=p.d`<svg width="8" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M3.874.816 4 .813c1.097 0 1.994.856 2.059 1.936l.003.126v.375h.563c.621 0 1.125.504 1.125 1.125v4.5C7.75 9.496 7.246 10 6.625 10h-5.25A1.125 1.125 0 0 1 .25 8.875v-4.5c0-.621.504-1.125 1.125-1.125h.563v-.375c0-1.097.856-1.994 1.936-2.059L4 .813l-.126.003ZM4 5.875a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm.096-3.933L4 1.938a.938.938 0 0 0-.933.841l-.005.096v.375h1.876v-.375a.938.938 0 0 0-.842-.933L4 1.938l.096.004Z" fill="currentColor"/></svg>`,u=p.d`
    <div 
        class="badge ${t=>t.userSubscriptionData.isSubscribed?"true":"false"} ${t=>"_1x_2y"==t.cardSize?"_1x_2y":"_2x_2y"}"
    >
        ${(0,g.g)((t=>!t.userSubscriptionData.isSubscribed),p.d`
            ${h}
            <b>${t=>{var e,i;return null===(i=null===(e=t.userSubscriptionData)||void 0===e?void 0:e.subscribeToViewText)||void 0===i?void 0:i.toLocaleUpperCase()}}</b>
        `)}
        ${(0,g.g)((t=>t.userSubscriptionData.isSubscribed),p.d`<b>${t=>{var e,i;return null===(i=null===(e=t.userSubscriptionData)||void 0===e?void 0:e.subscribedText)||void 0===i?void 0:i.toLocaleUpperCase()}}</b>`)}
    </div>
`;var m=i(63070),v=i(39391),f=i(12306),b=i(57905);let x=class extends r{};x=(0,a.gn)([(0,o.M)({name:"msn-subscription-badge",template:u,styles:c})],x),(0,m.z)().withShadowRootMode("closed").withElementDisambiguation((()=>b.h.ignoreDuplicate)).register((0,v.xg)(),(0,f.k)())},10871:function(t,e,i){i.d(e,{o:function(){return V}});var a,o=i(33940),n=i(18166),r=i(89346),s=i(87697),l=i(38156);!function(t){t[t.FullBleedDestination=0]="FullBleedDestination",t[t.Destination=1]="Destination",t[t.Theme=2]="Theme",t[t.Packages=3]="Packages",t[t.Flights=4]="Flights",t[t.RichContent=5]="RichContent",t[t.ThemeBigBoldText=6]="ThemeBigBoldText",t[t.RichContentBigBoldText=7]="RichContentBigBoldText"}(a||(a={}));class d extends r.H{constructor(){super()}generateTelemetryTag(t,e,i,a,o){if(t&&this.parentTelemetry){const r=Object.assign({},t);let s=r.name;e&&Object.keys(e).forEach((t=>{s+=e[t]?`|${t}:${e[t]}`:""}));const d=this.data.Metadata;return s+=`|${n.Yz.CategoryTagsEnabled}:${d.ShowLabel?"1":"0"}`,r.content={id:s,type:l.uH.StructuredData},o||(o=this.data.Telemetry),o&&"object"==typeof o&&Object.keys(o).forEach((t=>{null!=o[t]&&null!=o[t]&&(r.content.id+=`|${t}:${o[t]}`)})),i&&(r.content.headline=i),a&&(r.destinationUrl=a),this.parentTelemetry.addOrUpdateChild(r).getMetadataTag()}return""}getBingImageUrl(t){var e,i,a,o,r,s;return(null===(i=null===(e=this.data)||void 0===e?void 0:e.Metadata)||void 0===i?void 0:i.UseCircularImages)?null!==(a=(0,n.Ks)(t,200,200))&&void 0!==a?a:null!==(o=null==t?void 0:t.SourceUrl)&&void 0!==o?o:"":null!==(r=(0,n.Ks)(t,220,220))&&void 0!==r?r:null!==(s=null==t?void 0:t.SourceUrl)&&void 0!==s?s:""}getInterest(t){return t[0]}getDestinationTags(t){return t.join(" • ")}getPackageTags(t){var e;const i=[];return(null===(e=null==t?void 0:t.Hotel)||void 0===e?void 0:e.HotelStar)&&i.push(t.Hotel.HotelStar+" star hotel"),i.join(" • ")}getTripDetails(t){var e,i;const a=[];return(null===(e=null==t?void 0:t.GuestDetails)||void 0===e?void 0:e.Adults)&&a.push(t.GuestDetails.Adults+" people"),(null===(i=null==t?void 0:t.TripDetails)||void 0===i?void 0:i.NoOfNights)&&a.push(t.TripDetails.NoOfNights+" nights"),a.join(" • ")}getFlightsTags(t){const e=[],i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];if((null==t?void 0:t.DepartureTime)&&(null==t?void 0:t.ArrivalTime)&&e.push(t.DepartureTime.Day+" "+i[t.DepartureTime.Month-1]+" - "+t.ArrivalTime.Day+" "+i[t.ArrivalTime.Month-1]),null==t?void 0:t.NumberOfStops){let i=" stops";1===t.NumberOfStops&&(i=" stop"),e.push(t.NumberOfStops+i)}else e.push("Non stop");if(null==t?void 0:t.Duration){const i=Math.floor(t.Duration/60),a=t.Duration%60;let o="";i>0&&(o+=i+"h"),a>0&&(o+=(o.length>0?" ":"")+a+"m"),e.push(o)}return e.join(" • ")}get hasRichContentCards(){var t;if((null===(t=this.data)||void 0===t?void 0:t.DestinationData)&&Array.isArray(this.data.DestinationData)){const t=this.data.DestinationData[0].Type;return t==n.fZ.RichContentPanorama||t==n.fZ.RichContentTimelapse||t==n.fZ.RichContentVideos}return!1}getFlightsDestination(t){let e="";return(null==t?void 0:t.ArrivalAirport)&&(e=t.ArrivalAirport.City),e}get isBigBoldVersion(){var t;return(null===(t=this.data)||void 0===t?void 0:t.Metadata)&&("true"==this.data.Metadata.UseBigBoldVersion||1==this.data.Metadata.UseBigBoldVersion)}get isChevronOnBorder(){var t;return(null===(t=this.data)||void 0===t?void 0:t.Metadata)&&("true"==this.data.Metadata.ChevronOnBorder||1==this.data.Metadata.ChevronOnBorder)}getSlideType(t){var e;return t.Type==n.fZ.RichContentPanorama||t.Type==n.fZ.RichContentTimelapse||t.Type==n.fZ.RichContentVideos?a.RichContentBigBoldText:this.isBigBoldVersion?a.ThemeBigBoldText:this.data.Type==n.fZ.DestinationList&&(null===(e=this.data.Metadata)||void 0===e?void 0:e.UseFullBleedImages)?a.FullBleedDestination:this.data.Type==n.fZ.DestinationList?a.Destination:this.data.Type==n.fZ.ThemeCardList?a.Theme:this.data.Type==n.fZ.Packages?a.Packages:this.data.Type==n.fZ.Flights?a.Flights:a.Destination}}(0,o.gn)([s.LO],d.prototype,"data",void 0);var c=i(26755),p=i(56201),g=i(40082),h=i(53046),u=i(95263);const m=h.i`
:host {
    --elevation: 4;
    --fill-color: #FFFFFF;
    font-family: ${c.SVJ};
    font-size: 12px;
    line-height: 16px;
    color: #878787;
}

a {
    text-decoration: none;
    color: inherit;
}

.row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.bold {
    font-weight: 600;
}

.text-clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
    white-space: normal;
}

fluent-anchor::part(control) {
    border: none;
}

.travel-container {
    margin: 20px 0;
}

.circular-image .destination-details {
    text-align: center;
}

.destination-details, .package-details {
    padding: 8px 12px 12px 12px;
    margin-bottom: 4px;
}

.show-categories .destination-details {
    padding: 12px;
    margin-bottom: 4px;
}

.click-through-link {
    color: ${c.CHi};
    border-bottom: none;
    display: inline-block;
    overflow: hidden;
    text-decoration: none;
    text-overflow: ellipsis;
}

.click-through-link:focus,
.click-through-link:focus-within,
.click-through-link:hover,
.click-through-link:${p.b} {
    text-decoration: underline;
    outline: none;
}

.seeall-slide {
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    border-bottom: none;
    color: var(--accent-foreground-rest);
}

.seeall-slide:focus,

.seeall-slide:focus-within,

.seeall-slide:hover,

.seeall-slide:${p.b} {
    text-decoration: underline;
    outline: none;
}

.seeall-arrow-container {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    background: ${c.goi};
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    display: flex;
}

.seeall-slide-text {
    padding: 10px;
    margin: auto;
    max-width: 170px;
    white-space: initial;
    font-size: ${c.cSu};
    line-height: ${c.RUt};
    text-align: center;
}

.seeall-arrow-container svg {
    height: 50%;
    width: 50%;
    fill: white;
}

.travel-header-title {
    font-size: 20px;
    line-height: 28px;
    font-weight: 600;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 5px;
}

.travel-header-title span {
    overflow: hidden;
    position: relative;
}

.travel-header-title svg:first-child {
    padding-left: 6px;
}

.travel-header-title span .hover-underline {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    letter-spacing: 200px;
}

.travel-header-title:hover span .hover-underline {
    text-decoration: underline;
}

.use-foreground-fill path {
    fill: ${c.CHi};
}

.package-tags, .package-name, .hotel-details {
    padding: 4px 0px;
}

.pkg-destination-name {
    display: inline-flex;
    margin: 12px 0px 0px 12px;
    padding: 2px 8px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    color: #000000;
    text-transform: uppercase;
}

.package-details .package-name {
    -webkit-line-clamp: 2 !important;
    line-height: 25px;
}

.carousel-item-container {
    width: 220px;
    height: auto;
    background-color: ${u.A4};
    border-radius: calc(${c.rSr} * 1px);
    box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(0.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(0.13 * (2 - var(--background-luminance, 1))));
    margin-bottom: 16px;
}

.circular-image {
    box-shadow: unset;
    background-color: transparent;
}

.carousel-item-container:hover {
    --elevation: 12;
}

.zoom-on-hover {
    overflow: hidden;  
}

.destination-name {
    color: ${c.CHi};
    font-size: 16px;
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
}

.theme-name {
    -webkit-line-clamp: 2;
}

.destination-image {
    width: 220px;
    height: 220px;
    object-fit: cover;
    border-radius: 6px 6px 0px 0px;
    box-sizing: border-box;
}

.circular-image .destination-image{
    border-radius: 50%;
    width: 200px;
    height: 200px;
    margin-top: 10px;
}

.circular-image:hover .destination-image {
    transform: scale(1.07);
    box-shadow: 1px 24px 79px -37px rgb(0 0 0 / 75%);
    transition: transform 500ms ease-in-out;
}

.zoom-on-hover .destination-image-container {
    overflow: hidden;
}

.zoom-on-hover .destination-image {
    border: 0px solid white;
    display: block;
}

.zoom-on-hover:hover .destination-image {
    transform: scale(1.2);
    transform-origin: center;
    transition: transform 500ms ease-in-out;
}

.travel-header-group {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.destination-label {
    text-transform: uppercase;
    padding: 2px 8px;
    width: fit-content;
    background: rgba(0, 0, 0, 0.07);
    border-radius: 4px;
    display: none;
    font-weight: 600;
}

.show-categories .destination-label {
    display: block;
}

.show-categories .theme-label {
    display: block;
}

.destination-tags {
    color: ${c.Q5n}
}

.multi-line-font {
    font-size: 12px;
    line-height: 16px;
}

.see-all-header-link{
    color: ${c.goi};
    font-size: ${c.cSu};
    line-height: 28px;
}

.carousel-item-container:hover  .destination-name {
    text-decoration: underline;
}

.theme-label {
    display: none;
    font-size: 12px;
}

.package-details {
    height: 90px;
}

.package-details span, .flight-details span {
    font-size: 12px;
    line-height: 16px;
}

.package-details .trip-price {
    font-size: 16px;
    line-height: 22px;
}
.package-details .trip-details {
    padding: 0px 8px;
}

.travel-destination-carousel-container.flights-crsl, .travel-destination-carousel-container.chev-on-brd {
    left: -36px;
    padding: 0px 36px;
    width: 100%;
}

.carousel-item-container:first-child {
    margin-left: 4px;
}

.carousel-item-container:last-child {
    margin-right: 4px;
}

.flight-details-container {
    height: 80px;
    justify-content: normal;
    padding: 0px 8px;
}

.flight-details-container .flight-name {
    padding: 6px 0px 0px 0px;
}

.flight-details {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    line-height: 22px;
}

.flight-details .flight-price:first-letter {
    font-size: 22px;
    line-height: 26px;
    padding-bottom: 10px;
}

.flight-details .flight-price {
    font-size: 36px;
    line-height: 40px;
    align-items: center;
    font-weight: 400;
}

.carousel-item-container.flights {
    overflow: hidden;
}

.carousel-item-container .flight-image {
    height: 220px;
    width: 220px;
    background-image: var(--bg-img);
    background-position: center;
    background-size: 100%;
}

.carousel-item-container:hover .flight-image, .carousel-item-container:focus .flight-image {
    background-size: 110%;
    transition: background-size 0.5s ease-in-out;
}

.full-bleed {
    width: 180px;
    margin-bottom: 0px;
}

.fb-image {
    width: 180px;
    height: 298px;
    border-radius: 6px;
    background: linear-gradient(180deg, 
        rgba(var(${n.gJ.DominantColorRgb}, '0,0,0'),0) 0%, 
        rgba(var(${n.gJ.DominantColorRgb}, '0,0,0'),0) 50%, 
        rgba(var(${n.gJ.DominantColorRgb}, '0,0,0'),0.45) 67%, 
        rgba(var(${n.gJ.DominantColorRgb}, '0,0,0'),1) 85%, 
        rgba(var(${n.gJ.DominantColorRgb}, '0,0,0'),1) 100%),
        var(--background-image);
    display: flex;
    flex-direction: column-reverse;
}

.fb-destination-name{
    font-size: 16px;
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    font-weight: 600;
}

.fb-destination-label {
    opacity: 0.54;
    border-radius: 4px;
    font-weight: 600;
}

.white-text {
    color: white;
}

.gradient-text {
    color: var(${n.gJ.DominantTextColorHex}, '#FFFFFF');
}

.travel-destination-carousel-container.rich-content-crsl, .travel-destination-carousel-container.v-big-bold {
    left: -36px;
    padding: 0px 36px;
    width: 100%;
}
.carousel-item-container.slide-rich-content {
    width: var(--img-width);
    border-radius: 8px;
    overflow: hidden;
}

.rich-content-img-container {
    width: var(--img-width);
    height: var(--img-height);
    background-image: var(--bg-img);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: cover;
}
.v-big-bold .rich-content-img-container {
    background-image: var(--bg-img);
}
.rich-content-timelapse-hidden {
    background-image: var(--bg-img-2);
}
.slide-RichContentVideos:hover .rich-content-img-container, .slide-RichContentVideos:focus .rich-content-img-container,
.slide-RichContentPanorama:hover .rich-content-img-container, .slide-RichContentPanorama:focus .rich-content-img-container,
.slide-RichContentVideos .rich-content-img-container.active, .slide-RichContentPanorama .rich-content-img-container.active {
    animation: moveBackground 30s infinite;
    animation-timing-function: linear;
}

.slide-RichContentTimelapse:hover .rich-content-img-container, .slide-RichContentTimelapse:focus .rich-content-img-container,
.slide-RichContentTimelapse .rich-content-img-container.active {
    animation: flipBackground 5s infinite;
    animation-timing-function: linear;
}
@keyframes moveBackground {
    0%,100% { background-position-x: 0px; }
    50% { background-position-x: var(--rotate-offset); }
}

@keyframes flipBackground {
    0%, 100% { background-image: var(--bg-img); }
    45%, 50% { background-image: var(--bg-img-2); }
}

.rich-content-label-container {
    width: 100%;
}
.rich-content-label {
    display: inline-block;
    padding: 2px 6px 2px 4px;
    margin: 12px;
    border-radius: 6px;
    background-color: rgba(0,0,0,0.4);
    color: white;
    -webkit-line-clamp: 2;
    word-break: break-word;
}

.v-big-bold .carousel-item-container {
    width: 280px;
    height: 240px;
    overflow: hidden;
    border-radius: 8px;
    maring: 0;
}
.v-big-bold .background-img-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 280px;
    height: 240px;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 36.73%, rgba(0, 0, 0, 0) 58.33%), var(--bg-img);
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
}

.v-big-bold .carousel-item-container:hover .background-img-container, .v-big-bold .carousel-item-container:focus .background-img-container {
    background-size: 110%;
    transition: background-size 0.5s ease-in-out;
}
.v-big-bold .carousel-item-container:hover .theme-category, .v-big-bold .carousel-item-container:focus .theme-category {
    padding-bottom: 32px;
    transition: padding-bottom 0.5s ease-in-out;
}
.v-big-bold .theme-region-container {
    width: 100%;
}

.v-big-bold .theme-region {
    display: inline-block;
    margin: 12px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    padding: 2px 6px 2px 4px;
    border-radius: 6px;
    background-color: rgba(0,0,0,0.4);
    color: white;
}

.v-big-bold .theme-category {
    padding: 12px 32px 16px 12px;
    font-weight: 600;
    font-size: 46px;
    line-height: 46px;
    color: white;
    white-space: normal;
}
.rich-content-icon-container {
    width: 48px;
    height: 48px;
    margin-top: 50px;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(40px);
    border-radius: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.v-big-bold .rich-content-icon-container {
    margin-top: 45px;
    width: 56px;
    height: 56px;
}
.rich-content-icon-container svg {
    width: 28px;
}
.v-big-bold .rich-content-icon-container svg {
    width: 34px;
}
.rich-content-details-container {
    padding: 12px;
    overflow: hidden;
}
.v-big-bold .rich-content-details-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 92%;
    height: 66px;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0) 100%);
}
.rich-content-details {
    color: ${c.CHi};
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    word-break: break-all;
}
.v-big-bold .rich-content-details {
    color: white;
    font-size: 36px;
    line-height: 46px;
    -webkit-line-clamp: 1;
    word-break: break-all;
}
.v-big-bold .flipper-container {
    padding: 0px 20px 15px 0px;
}

.slide-rich-content:hover .rich-content-details, .slide-rich-content:focus .rich-content-details {
    text-decoration: underline;
}

.slide-rich-content:hover .rich-content-icon-container, .slide-rich-content:focus .rich-content-icon-container {
    visibility: hidden;
}
.v-big-bold.slide-rich-content:hover .rich-content-details, .v-big-bold.slide-rich-content:focus .rich-content-details {
    text-decoration: none;
}
.v-big-bold .seeall-slide-text, .rich-content-crsl.v-big-bold .seeall-slide-text {
    max-width: 200px;
}
.rich-content-crsl .seeall-slide {
    width: 180px;
}
.rich-content-crsl .seeall-arrow-container {
    margin-top: 36px;
}
.rich-content-crsl.v-big-bold .seeall-arrow-container {
    margin-top: 0px;
}
.rich-content-crsl.v-big-bold .seeall-slide {
    width: 280px;
}

`.withBehaviors((0,g.Uu)(h.i`
            :host {
                --fill-color: #333333;
                color: #9D9D9D;
            }
            .destination-tags {
                color: rgba(255, 255, 255, 0.55);
            }
            .destination-label {
                background: rgba(0, 0, 0, 0.25);
            }
        `));var v=i(39181),f=i(13988),b=i(18864);const x={Carousel:{name:"TravelDestinationCarousel",type:l.c9.Carousel},Slide:{action:l.Aw.Click,name:"TravelDestinationCarouselItem",type:l.c9.TravelDestinationCard,behavior:l.wu.Navigate,triggerPageView:!0},PanoramaSlide:{action:l.Aw.Click,name:"TravelDestinationCarouselItem>Panomara",type:l.c9.TravelDestinationCard,behavior:l.wu.Navigate,triggerPageView:!0},VideosSlide:{action:l.Aw.Click,name:"TravelDestinationCarouselItem>Videos",type:l.c9.TravelDestinationCard,behavior:l.wu.Navigate,triggerPageView:!0},TimelapseSlide:{action:l.Aw.Click,name:"TravelDestinationCarouselItem>Timelapse",type:l.c9.TravelDestinationCard,behavior:l.wu.Navigate,triggerPageView:!0},Title:{action:l.Aw.Click,name:"Header",behavior:l.wu.Navigate,triggerPageView:!0},SeeAllLink:{action:l.Aw.Click,name:"SeeAllLink",behavior:l.wu.Navigate,triggerPageView:!0},SeeAllSlide:{action:l.Aw.Click,name:"SeeAllSlide",behavior:l.wu.Navigate,triggerPageView:!0},LeftChevron:{action:l.Aw.Click,behavior:l.wu.More,name:"PreviousSlideArrow"},RightChevron:{action:l.Aw.Click,behavior:l.wu.More,name:"NextSlideArrow"}},y=v.d`
    <svg 
        width="14" 
        height="14" 
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M132.677 449.677L326.03 256.323L132.677 62.97L159.323 36.3233L379.323 256.323L159.323 476.323L132.677 449.677Z"
            />
    </svg>
`,C=v.d`
    <svg width="32" height="25" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-3.0962e-07 3.64259L-1.42119e-06 16.3574C-1.46342e-06 16.8405 0.0957016 17.2962 0.287108 17.7246C0.478514 18.153 0.733722 18.5313 1.05273 18.8594C1.37174 19.1875 1.75 19.4427 2.1875 19.625C2.625 19.8073 3.08528 19.903 3.56836 19.9121C3.67773 19.9121 3.78711 19.9076 3.89648 19.8984C4.00586 19.8893 4.11979 19.8711 4.23828 19.8438C5.07682 19.707 5.91081 19.5749 6.74023 19.4473C7.56966 19.3197 8.4082 19.2012 9.25586 19.0918C10.0488 18.9915 10.8372 18.9095 11.6211 18.8457C12.4049 18.7819 13.1979 18.75 14 18.75C14.8021 18.75 15.5951 18.7819 16.3789 18.8457C17.1628 18.9095 17.9557 18.9915 18.7578 19.0918C19.6055 19.2012 20.4395 19.3197 21.2598 19.4473C22.0801 19.5749 22.9141 19.707 23.7617 19.8438C23.9896 19.8893 24.2038 19.9121 24.4043 19.9121C24.8965 19.9121 25.3568 19.821 25.7852 19.6387C26.2135 19.4564 26.5964 19.2012 26.9336 18.8731C27.2708 18.5449 27.5306 18.1712 27.7129 17.752C27.8952 17.3327 27.9909 16.8679 28 16.3574L28 3.64259C28 3.1504 27.9043 2.69012 27.7129 2.26173C27.5215 1.83334 27.2617 1.45965 26.9336 1.14064C26.6055 0.821626 26.2272 0.566417 25.7988 0.375011C25.3704 0.183605 24.9056 0.0924587 24.4043 0.101573C24.2949 0.101573 24.1901 0.106131 24.0898 0.115245C23.9896 0.12436 23.8802 0.138032 23.7617 0.156261C22.9232 0.302094 22.0937 0.438813 21.2734 0.566417C20.4531 0.694021 19.6146 0.81251 18.7578 0.921885C17.9648 1.02215 17.1764 1.09962 16.3926 1.15431C15.6087 1.20899 14.8112 1.2409 14 1.25001C13.1979 1.25001 12.4049 1.22267 11.6211 1.16798C10.8372 1.11329 10.0488 1.03126 9.25586 0.921885C8.4082 0.812509 7.56966 0.69402 6.74023 0.566416C5.91081 0.438811 5.07682 0.302092 4.23828 0.156259C4.12891 0.13803 4.01953 0.124358 3.91016 0.115243C3.80078 0.106129 3.69141 0.101571 3.58203 0.101571C3.08984 0.101571 2.62956 0.192717 2.20117 0.375009C1.77279 0.5573 1.39453 0.807952 1.06641 1.12696C0.738281 1.44597 0.478515 1.82423 0.287109 2.26173C0.0957029 2.69923 -2.67388e-07 3.15951 -3.0962e-07 3.64259ZM1.75 3.64259C1.75 3.39649 1.79557 3.16407 1.88672 2.94532C1.97786 2.72657 2.11003 2.53517 2.2832 2.3711C2.45638 2.20704 2.65234 2.07944 2.87109 1.98829C3.08984 1.89714 3.32682 1.84701 3.58203 1.8379C3.69141 1.8379 3.80534 1.85157 3.92383 1.87892C5.58268 2.1797 7.25521 2.43946 8.94141 2.65821C10.6276 2.87696 12.3138 2.9909 14 3.00001C15.6862 3.00001 17.3724 2.89064 19.0586 2.67189C20.7448 2.45314 22.4173 2.18881 24.0762 1.87892L24.2402 1.85157C24.2949 1.84246 24.3496 1.8379 24.4043 1.8379C24.6504 1.8379 24.8828 1.88347 25.1016 1.97462C25.3203 2.06577 25.5163 2.19337 25.6895 2.35743C25.8626 2.5215 25.9993 2.7129 26.0996 2.93165C26.1999 3.1504 26.25 3.38738 26.25 3.64259L26.25 16.3574C26.25 16.7402 26.1406 17.0866 25.9219 17.3965C25.7031 17.7064 25.4069 17.9251 25.0332 18.0527L16.1055 10.752C15.8138 10.515 15.4857 10.3373 15.1211 10.2188C14.7565 10.1003 14.3828 10.0365 14 10.0274C13.6081 10.0274 13.2344 10.0866 12.8789 10.2051C12.5234 10.3236 12.1953 10.5059 11.8945 10.752L2.95312 18.0527C2.59765 17.8978 2.31055 17.679 2.0918 17.3965C1.87305 17.1139 1.75911 16.7676 1.75 16.3574L1.75 3.64259ZM5.25 7.37501C5.25 7.73048 5.31836 8.06772 5.45508 8.38673C5.5918 8.70574 5.77865 8.98373 6.01562 9.22071C6.2526 9.45769 6.53516 9.6491 6.86328 9.79493C7.19141 9.94077 7.52864 10.0091 7.875 10C8.23047 10 8.56771 9.93165 8.88672 9.79493C9.20573 9.65821 9.48372 9.47136 9.7207 9.23439C9.95768 8.99741 10.1491 8.71485 10.2949 8.38673C10.4408 8.0586 10.5091 7.72136 10.5 7.37501C10.5 7.01954 10.4316 6.6823 10.2949 6.36329C10.1582 6.04428 9.97135 5.76629 9.73437 5.52931C9.4974 5.29233 9.21484 5.10092 8.88672 4.95509C8.55859 4.80925 8.22135 4.74089 7.875 4.75001C7.51953 4.75001 7.18229 4.81837 6.86328 4.95509C6.54427 5.09181 6.26628 5.27866 6.0293 5.51563C5.79232 5.75261 5.60091 6.03517 5.45508 6.36329C5.30924 6.69142 5.24088 7.02866 5.25 7.37501ZM7 7.37501C7 7.13803 7.08659 6.93295 7.25977 6.75978C7.43294 6.5866 7.63802 6.50001 7.875 6.50001C8.11198 6.50001 8.31706 6.5866 8.49023 6.75978C8.66341 6.93295 8.75 7.13803 8.75 7.37501C8.75 7.61199 8.66341 7.81707 8.49023 7.99024C8.31706 8.16342 8.11198 8.25001 7.875 8.25001C7.63802 8.25001 7.43294 8.16342 7.25976 7.99024C7.08659 7.81707 7 7.61199 7 7.37501ZM21.916 17.7656C20.6035 17.5651 19.291 17.3874 17.9785 17.2324C16.666 17.0775 15.3398 17 14 17C12.6693 17 11.3431 17.0775 10.0215 17.2324C8.69987 17.3874 7.38281 17.5651 6.07031 17.7656L13.002 12.1055C13.2936 11.8685 13.6263 11.75 14 11.75C14.3737 11.75 14.7064 11.8685 14.998 12.1055L21.916 17.7656Z" fill="white"/>
    </svg>
`,w=v.d`
    <svg width="25" height="26" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.8984 3.20513C16.9174 3.20513 21.7969 8.08408 21.7969 14.1026C21.7969 20.121 16.9174 25 10.8984 25C4.8794 25 0 20.121 0 14.1026C0 8.08408 4.8794 3.20513 10.8984 3.20513ZM10.8984 5.12821C5.94158 5.12821 1.92325 9.14617 1.92325 14.1026C1.92325 19.059 5.94158 23.0769 10.8984 23.0769C15.8553 23.0769 19.8736 19.059 19.8736 14.1026C19.8736 9.14617 15.8553 5.12821 10.8984 5.12821ZM10.8984 7.05128C11.3853 7.05128 11.7876 7.41301 11.8513 7.88235L11.8601 8.01282V13.7821C11.8601 14.3131 11.4295 14.7436 10.8984 14.7436C10.4116 14.7436 10.0093 14.3818 9.94553 13.9126L9.93681 13.7821V8.01282C9.93681 7.48178 10.3674 7.05128 10.8984 7.05128ZM20.0624 3.35091L20.1683 3.42763L21.6535 4.66376C22.0618 5.00349 22.1172 5.60977 21.7775 6.01792C21.4659 6.39206 20.9305 6.46986 20.5291 6.21855L20.4232 6.14183L18.9379 4.9057C18.5296 4.56597 18.4743 3.95969 18.8139 3.55154C19.1255 3.1774 19.6609 3.0996 20.0624 3.35091ZM13.7833 0C14.3144 0 14.7449 0.4305 14.7449 0.961538C14.7449 1.44833 14.3831 1.85063 13.9138 1.91429L13.7833 1.92308H8.01356C7.48247 1.92308 7.05193 1.49258 7.05193 0.961538C7.05193 0.474744 7.41369 0.0724487 7.88307 0.00878206L8.01356 0H13.7833Z" fill="white"/>
    </svg>
`,$=v.d`
    <svg width="32" height="30" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7402 15.8049L17.8555 19.9024L13.7402 24L12.5098 22.7748L14.5195 20.7737H14C13.0339 20.7737 12.0723 20.7374 11.1152 20.6648C10.1582 20.5922 9.19661 20.4606 8.23047 20.27C7.78385 20.1883 7.27344 20.0749 6.69922 19.9297C6.125 19.7845 5.52799 19.5984 4.9082 19.3715C4.28841 19.1446 3.69141 18.8815 3.11719 18.582C2.54297 18.2825 2.01888 17.9421 1.54492 17.561C1.07096 17.1798 0.697266 16.7487 0.423828 16.2677C0.150391 15.7867 0.00911458 15.2558 0 14.675C0 14.3664 0.0455729 14.0669 0.136719 13.7765C0.227865 13.4861 0.355469 13.2138 0.519531 12.9597C0.683594 12.7056 0.870443 12.4697 1.08008 12.2518C1.28971 12.034 1.51302 11.8298 1.75 11.6393V14.675C1.75 15.0108 1.85482 15.3148 2.06445 15.5871C2.27409 15.8593 2.50195 16.0998 2.74805 16.3086C3.17643 16.6625 3.67773 16.9756 4.25195 17.2479C4.82617 17.5201 5.44141 17.7561 6.09766 17.9558C6.75391 18.1554 7.43294 18.3279 8.13477 18.4731C8.83659 18.6183 9.5293 18.7272 10.2129 18.7998C10.8965 18.8724 11.5664 18.9314 12.2227 18.9767C12.8789 19.0221 13.4714 19.0403 14 19.0312H14.5059L12.5098 17.0301L13.7402 15.8049ZM26.25 11.6393C26.487 11.8298 26.7103 12.034 26.9199 12.2518C27.1296 12.4697 27.3118 12.7102 27.4668 12.9733C27.6217 13.2365 27.7493 13.5043 27.8496 13.7765C27.9499 14.0488 28 14.3483 28 14.675C28 15.2286 27.8724 15.7368 27.6172 16.1997C27.362 16.6625 27.0156 17.08 26.5781 17.4521C26.1406 17.8242 25.653 18.16 25.1152 18.4594C24.5775 18.7589 24.0215 19.0176 23.4473 19.2354C22.873 19.4532 22.3125 19.6347 21.7656 19.7799C21.2188 19.9251 20.7311 20.0476 20.3027 20.1475L19.9473 18.4458C20.2025 18.3914 20.5352 18.3097 20.9453 18.2008C21.3555 18.0919 21.7975 17.9603 22.2715 17.806C22.7454 17.6517 23.2148 17.4657 23.6797 17.2479C24.1445 17.0301 24.5729 16.7896 24.9648 16.5264C25.3568 16.2632 25.6667 15.9773 25.8945 15.6687C26.1224 15.3602 26.2409 15.0289 26.25 14.675V11.6393ZM8.75 10.768C8.75 11.2581 8.65885 11.6892 8.47656 12.0613C8.29427 12.4334 8.05273 12.751 7.75195 13.0142C7.45117 13.2774 7.09115 13.4725 6.67188 13.5995C6.2526 13.7266 5.81055 13.7947 5.3457 13.8037C4.96289 13.8037 4.58008 13.7674 4.19727 13.6948C3.81445 13.6222 3.45898 13.477 3.13086 13.2592V12.0204C3.79622 12.5559 4.54818 12.8236 5.38672 12.8236C5.6875 12.8236 5.97005 12.7828 6.23438 12.7011C6.4987 12.6194 6.73568 12.4969 6.94531 12.3335C7.15495 12.1702 7.31901 11.9705 7.4375 11.7345C7.55599 11.4986 7.61523 11.2127 7.61523 10.8769C7.61523 10.3959 7.51497 10.0238 7.31445 9.76064C7.11393 9.49745 6.85417 9.29779 6.53516 9.16166C6.21615 9.02553 5.86068 8.94838 5.46875 8.93023C5.07682 8.91208 4.69857 8.89847 4.33398 8.88939H4.10156V7.90925H4.2793C4.62565 7.90925 4.97656 7.90017 5.33203 7.88202C5.6875 7.86387 6.00651 7.79127 6.28906 7.66421C6.57161 7.53715 6.80404 7.35111 6.98633 7.10607C7.16862 6.86103 7.25977 6.50709 7.25977 6.04424C7.25977 5.44526 7.10482 5.00964 6.79492 4.73738C6.48503 4.46512 6.03385 4.32898 5.44141 4.32898C5.08594 4.32898 4.74414 4.39251 4.41602 4.51957C4.08789 4.64663 3.78711 4.8236 3.51367 5.05048V3.92059C3.8418 3.71185 4.19271 3.56665 4.56641 3.48497C4.9401 3.40329 5.32292 3.35791 5.71484 3.34884C6.07943 3.34884 6.42122 3.39875 6.74023 3.49858C7.05924 3.59841 7.34635 3.75269 7.60156 3.96143C7.85677 4.17016 8.04818 4.42428 8.17578 4.72377C8.30339 5.02326 8.3763 5.36812 8.39453 5.75837C8.39453 7.08338 7.75195 7.95009 6.4668 8.35848C6.79492 8.38571 7.0957 8.46285 7.36914 8.5899C7.64258 8.71696 7.88411 8.88939 8.09375 9.1072C8.30339 9.32501 8.46289 9.57005 8.57227 9.84231C8.68164 10.1146 8.74089 10.4231 8.75 10.768ZM14.0273 13.8037C13.4076 13.8037 12.8971 13.6585 12.4961 13.3681C12.0951 13.0777 11.7806 12.7011 11.5527 12.2382C11.3249 11.7754 11.1608 11.2762 11.0605 10.7408C10.9603 10.2053 10.9147 9.68349 10.9238 9.17527C10.9238 8.76688 10.9512 8.34033 11.0059 7.89563C11.0605 7.45094 11.1471 7.01532 11.2656 6.58877C11.3841 6.16222 11.5482 5.74929 11.7578 5.34997C11.9674 4.95065 12.2135 4.61032 12.4961 4.32898C12.7786 4.04765 13.1204 3.81168 13.5215 3.6211C13.9225 3.43052 14.3737 3.33976 14.875 3.34884C15.1484 3.34884 15.4219 3.36699 15.6953 3.40329C15.9688 3.43959 16.2331 3.51673 16.4883 3.63471V4.73738C16.2422 4.61032 15.987 4.51049 15.7227 4.43789C15.4583 4.36529 15.1849 4.32898 14.9023 4.32898C14.3646 4.32898 13.918 4.46058 13.5625 4.72377C13.207 4.98695 12.9199 5.32275 12.7012 5.73114C12.4824 6.13953 12.3275 6.58423 12.2363 7.06523C12.1452 7.54623 12.0996 8.00908 12.0996 8.45377V8.56268C12.3366 8.12706 12.6419 7.80942 13.0156 7.60976C13.3893 7.4101 13.8223 7.31027 14.3145 7.31027C14.7702 7.31027 15.1712 7.39195 15.5176 7.5553C15.8639 7.71866 16.151 7.94101 16.3789 8.22235C16.6068 8.50369 16.7799 8.83494 16.8984 9.21611C17.0169 9.59728 17.0762 9.9966 17.0762 10.4141C17.0762 10.8678 17.0078 11.2989 16.8711 11.7073C16.7344 12.1157 16.5384 12.4742 16.2832 12.7828C16.028 13.0913 15.709 13.3364 15.3262 13.5179C14.9434 13.6994 14.5104 13.7947 14.0273 13.8037ZM14.0547 8.2768C13.7721 8.2768 13.5124 8.33125 13.2754 8.44016C13.0384 8.54906 12.8379 8.69881 12.6738 8.88939C12.5098 9.07998 12.3776 9.29779 12.2773 9.54282C12.1771 9.78786 12.1315 10.0465 12.1406 10.3188C12.1406 10.6092 12.1771 10.8996 12.25 11.19C12.3229 11.4804 12.4414 11.7482 12.6055 11.9932C12.7695 12.2382 12.9746 12.4379 13.2207 12.5922C13.4668 12.7465 13.7539 12.8236 14.082 12.8236C14.3919 12.8236 14.6654 12.7601 14.9023 12.633C15.1393 12.506 15.3307 12.3335 15.4766 12.1157C15.6224 11.8979 15.7363 11.6574 15.8184 11.3942C15.9004 11.131 15.9414 10.8542 15.9414 10.5638C15.9414 10.2643 15.9095 9.97845 15.8457 9.70618C15.7819 9.43392 15.6725 9.18888 15.5176 8.97107C15.3626 8.75326 15.1667 8.58537 14.9297 8.46739C14.6927 8.3494 14.401 8.28588 14.0547 8.2768ZM21.7793 13.8037C21.36 13.8037 20.9954 13.7266 20.6855 13.5723C20.3757 13.418 20.1113 13.2048 19.8926 12.9325C19.6738 12.6602 19.4915 12.3517 19.3457 12.0068C19.1999 11.6619 19.0905 11.3035 19.0176 10.9314C18.9447 10.5593 18.89 10.1872 18.8535 9.81509C18.8171 9.443 18.8034 9.09813 18.8125 8.78049C18.8125 8.42655 18.8262 8.04992 18.8535 7.6506C18.8809 7.25128 18.9355 6.84742 19.0176 6.43902C19.0996 6.03063 19.2135 5.64492 19.3594 5.28191C19.5052 4.91889 19.6921 4.59217 19.9199 4.30176C20.1478 4.01134 20.4349 3.77992 20.7812 3.60749C21.1276 3.43505 21.5286 3.34884 21.9844 3.34884C22.6497 3.34884 23.1784 3.52581 23.5703 3.87975C23.9622 4.23369 24.2585 4.67385 24.459 5.20023C24.6595 5.7266 24.7871 6.28928 24.8418 6.88826C24.8965 7.48724 24.9284 8.0363 24.9375 8.53545C24.9375 8.87124 24.9238 9.23426 24.8965 9.6245C24.8691 10.0147 24.8099 10.4095 24.7188 10.8088C24.6276 11.2082 24.5091 11.5803 24.3633 11.9251C24.2174 12.27 24.026 12.5876 23.7891 12.878C23.5521 13.1685 23.2695 13.3908 22.9414 13.5451C22.6133 13.6994 22.2259 13.7856 21.7793 13.8037ZM21.9297 4.32898C21.6107 4.32898 21.3418 4.40613 21.123 4.56041C20.9043 4.71469 20.7174 4.91889 20.5625 5.173C20.4076 5.42711 20.2891 5.71299 20.207 6.03063C20.125 6.34827 20.0612 6.67045 20.0156 6.99716C19.9701 7.32388 19.9427 7.63698 19.9336 7.93647C19.9245 8.23596 19.9199 8.49915 19.9199 8.72604C19.9199 8.94385 19.9245 9.19342 19.9336 9.47476C19.9427 9.7561 19.9701 10.051 20.0156 10.3596C20.0612 10.6682 20.125 10.9677 20.207 11.2581C20.2891 11.5485 20.403 11.8117 20.5488 12.0476C20.6947 12.2836 20.877 12.4697 21.0957 12.6058C21.3145 12.7419 21.5788 12.8145 21.8887 12.8236C22.1986 12.8236 22.4583 12.751 22.668 12.6058C22.8776 12.4606 23.0599 12.2655 23.2148 12.0204C23.3698 11.7754 23.4837 11.5077 23.5566 11.2172C23.6296 10.9268 23.6888 10.6183 23.7344 10.2915C23.7799 9.96483 23.8073 9.66534 23.8164 9.39308C23.8255 9.12082 23.8301 8.87124 23.8301 8.64436C23.8301 8.4447 23.8255 8.19966 23.8164 7.90925C23.8073 7.61883 23.7845 7.31027 23.748 6.98355C23.7116 6.65684 23.6523 6.33919 23.5703 6.03063C23.4883 5.72206 23.3789 5.43619 23.2422 5.173C23.1055 4.90981 22.9277 4.70562 22.709 4.56041C22.4902 4.4152 22.2305 4.33806 21.9297 4.32898ZM26.25 3.21271C26.0312 3.21271 25.8262 3.17187 25.6348 3.09019C25.4434 3.00851 25.2702 2.89053 25.1152 2.73625C24.9603 2.58196 24.8464 2.41407 24.7734 2.23256C24.7005 2.05105 24.6549 1.84231 24.6367 1.60635C24.6367 1.38854 24.6777 1.18434 24.7598 0.993761C24.8418 0.803176 24.9603 0.630743 25.1152 0.476461C25.2702 0.322178 25.4388 0.208735 25.6211 0.136132C25.8034 0.0635281 26.013 0.0181509 26.25 0C26.4688 0 26.6738 0.0408395 26.8652 0.122518C27.0566 0.204197 27.2298 0.322178 27.3848 0.476461C27.5397 0.630743 27.6536 0.798639 27.7266 0.980147C27.7995 1.16166 27.8451 1.37039 27.8633 1.60635C27.8633 1.82416 27.8223 2.02836 27.7402 2.21895C27.6582 2.40953 27.5397 2.58196 27.3848 2.73625C27.2298 2.89053 27.0612 3.00397 26.8789 3.07657C26.6966 3.14918 26.487 3.19455 26.25 3.21271ZM26.25 0.694271C25.9948 0.694271 25.7806 0.780488 25.6074 0.952921C25.4342 1.12535 25.3431 1.34317 25.334 1.60635C25.334 1.86047 25.4206 2.07374 25.5938 2.24617C25.7669 2.4186 25.9857 2.50936 26.25 2.51843C26.5052 2.51843 26.7194 2.43222 26.8926 2.25978C27.0658 2.08735 27.1569 1.86954 27.166 1.60635C27.166 1.35224 27.0794 1.13897 26.9062 0.966534C26.7331 0.794101 26.5143 0.703347 26.25 0.694271Z" fill="white"/>
    </svg>
`,k=v.d`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 5.27368C5 3.56682 6.82609 2.48151 8.32538 3.2973L20.687 10.0235C22.2531 10.8756 22.2531 13.124 20.687 13.9762L8.32538 20.7024C6.82609 21.5181 5 20.4328 5 18.726V5.27368Z" fill="white" />
</svg>
`,L=v.d`
<svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_301_30)">
    <path d="M21 18H3C1.34315 18 0 19.3431 0 21C0 22.6569 1.34315 24 3 24H21C22.6569 24 24 22.6569 24 21C24 19.3431 22.6569 18 21 18Z" fill="url(#paint0_linear_301_30)"/>
    <path d="M10.2441 18.0234C10.2441 15.0586 12.6442 12.655 15.6047 12.655C18.5652 12.655 20.9652 15.0586 20.9652 18.0234" fill="#FF9D00"/>
    <path d="M3 18C3 18 4.5 3.74994 12.9375 2.64453C12.9375 2.64453 6.75002 4.49994 7.5 18H3Z" fill="url(#paint1_linear_301_30)"/>
    <path d="M11.2497 2.24984C11.2497 2.24984 10.9944 9.60276 18.7493 9.75482C18.7493 9.75482 19.7973 1.84308 11.2497 2.24984Z" fill="url(#paint2_linear_301_30)"/>
    <path d="M12 2.5C12 2.5 6.57477 -3.42883 0.00195312 2.83216C0.00195312 2.83216 5.22832 9.87908 12 2.5Z" fill="url(#paint3_linear_301_30)"/>
    <path d="M12.0103 2.4743C12.0103 2.4743 5.29924 6.5606 9.8772 13.2349C9.8772 13.2349 17.5434 9.4819 12.0103 2.4743Z" fill="url(#paint4_linear_301_30)"/>
    </g>
    <defs>
        <linearGradient id="paint0_linear_301_30" x1="12" y1="18" x2="12" y2="24" gradientUnits="userSpaceOnUse">
            <stop stop-color="#00C2FF"/><stop offset="1" stop-color="#0098FF"/>
        </linearGradient>
        <linearGradient id="paint1_linear_301_30" x1="3.22968" y1="12.3255" x2="6.57694" y2="14.6041" gradientUnits="userSpaceOnUse">
            <stop stop-color="#92511C"/><stop offset="1" stop-color="#CA8349"/>
        </linearGradient>
        <linearGradient id="paint2_linear_301_30" x1="12.7102" y1="7.02141" x2="16.7133" y2="3.87433" gradientUnits="userSpaceOnUse">
            <stop stop-color="#338200"/><stop offset="1" stop-color="#50CC00"/>
        </linearGradient>
        <linearGradient id="paint3_linear_301_30" x1="-0.000976629" y1="2.99988" x2="8.78981" y2="-2.50238" gradientUnits="userSpaceOnUse">
            <stop stop-color="#338200"/><stop offset="1" stop-color="#50CC00"/>
        </linearGradient>
        <linearGradient id="paint4_linear_301_30" x1="9.46734" y1="9.65223" x2="13.9542" y2="9.55217" gradientUnits="userSpaceOnUse">
            <stop stop-color="#338200"/><stop offset="1" stop-color="#50CC00"/>
        </linearGradient>
        <clipPath id="clip0_301_30"><rect width="24" height="24" fill="white"/></clipPath>
    </defs>
</svg>

`,T=v.d`
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.9889 11.9463C21.9889 13.0461 21.0974 13.9376 19.9976 13.9376C19.9782 13.9376 19.9588 13.9373 19.9394 13.9367L15.2006 13.7972L11.7473 20.9398C11.4695 21.5144 10.8875 21.8794 10.2493 21.8794C9.73792 21.8794 9.32333 21.4648 9.32333 20.9534C9.32333 20.9166 9.32553 20.8798 9.32992 20.8432L10.1921 13.6505L6.42657 13.5406L5.93654 14.8813C5.7507 15.3896 5.26709 15.7277 4.72584 15.7277C4.2281 15.7277 3.8246 15.3242 3.8246 14.8265L3.8253 13.3498L3.01454 13.181C2.42989 13.059 2.01099 12.5436 2.01099 11.9463C2.01099 11.3492 2.43007 10.834 3.01471 10.7124L3.8253 10.5437L3.8246 9.06617C3.8246 8.60672 4.16841 8.22756 4.61279 8.17195L4.72584 8.16493C5.26709 8.16493 5.7507 8.50304 5.93654 9.01138L6.42765 10.3518L10.1792 10.2418L9.32992 3.15735C9.32773 3.13906 9.32608 3.12071 9.32498 3.10233L9.32333 3.04711C9.32333 2.53568 9.73792 2.12109 10.2493 2.12109C10.8344 2.12109 11.3721 2.42784 11.6716 2.92154L11.7473 3.06073L15.1499 10.0963L19.9394 9.95613C21.0386 9.92385 21.9558 10.7887 21.9881 11.8879L21.9889 11.9463Z" />
    </svg>
`;function S(t,e){if(!((null==t?void 0:t.Images)&&Array.isArray(t.Images)&&t.Images.length>0))return"";const i=function(t,e){return t.Type==n.fZ.RichContentPanorama||t.Type==n.fZ.RichContentVideos?e.isBigBoldVersion?{height:240,width:1260}:{height:220,width:1260}:e.isBigBoldVersion?{height:240,width:280}:{height:220,width:180}}(t,e);let a="--bg-img:url('"+(0,n.Ks)(t.Images[0],i.height,i.width)+"');";return t.Type==n.fZ.RichContentTimelapse&&t.Images.length>=2&&(a+="--bg-img-2:url('"+(0,n.Ks)(t.Images[1],i.height,i.width)+"');"),e.isBigBoldVersion?a+="--img-height:240px; --img-width:280px; --rotate-offset:-960px;":a+="--img-height:220px; --img-width:180px; --rotate-offset:-1080px;",a}const F=v.d`
    <div class="rich-content-details-container">
        <a class="rich-content-details bold text-clamp" target="_blank" href="${t=>(0,n.B8)(t.ClickUrl)}">
            ${t=>t.DestinationName}
        </a>
    </div>
`,A=v.d`
    <fluent-anchor class="carousel-item-container column slide-rich-content slide-${t=>t.Type} ${(t,e)=>e.parent.isBigBoldVersion?"v-big-bold":""}"
        href="${t=>(0,n.B8)(t.ClickUrl)}"  title="${t=>t.Title}" style="${(t,e)=>S(t,e.parent)}" target="_blank"
        data-t="${(t,e)=>e.parent.generateTelemetryTag(function(t){return t.Type==n.fZ.RichContentPanorama?x.PanoramaSlide:t.Type==n.fZ.RichContentTimelapse?x.TimelapseSlide:t.Type==n.fZ.RichContentVideos?x.VideosSlide:x.Slide}(t),{[n.Yz.CardPosition]:`${e.index}`},t.Title,t.ClickUrl)}"
    >
        <div class="rich-content-img-container">
            <div class="rich-content-label-container"><span class="rich-content-label">${t=>function(t){return t.Type==n.fZ.RichContentPanorama?"Panoramic view":t.Type==n.fZ.RichContentTimelapse?"Timelapse":t.Type==n.fZ.RichContentVideos?"360 videos":""}(t)}</span></div>
            <div class="rich-content-icon-container">${t=>function(t){var e;return(null==t?void 0:t.MetaData)&&(null===(e=null==t?void 0:t.MetaData)||void 0===e?void 0:e.UsePlayIcon)?k:t.Type==n.fZ.RichContentPanorama?C:t.Type==n.fZ.RichContentTimelapse?w:t.Type==n.fZ.RichContentVideos?$:""}(t)}</div>
            ${(0,f.g)(((t,e)=>e.parent.isBigBoldVersion),F)}
        </div>
        ${(0,f.g)(((t,e)=>!e.parent.isBigBoldVersion),F)}
        ${(0,f.g)((t=>t.Type==n.fZ.RichContentTimelapse),v.d`
            <div class="rich-content-timelapse-hidden"/>
        `)}
    </fluent-anchor> 
`;const I=v.d`
    <fluent-anchor
        class="carousel-item-container full-bleed column"
        href="${t=>(0,n.B8)(t.TravelGuideUrl)}"
        data-t="${(t,e)=>e.parent.generateTelemetryTag(x.Slide,{[n.Yz.CardPosition]:`${e.index}`,[n.Yz.SatoriId]:`${t.SatoriId}`},t.Name,t.TravelGuideUrl,t.Telemetry)}"
    >
        ${(0,f.g)((t=>{var e;return null===(e=t.Images)||void 0===e?void 0:e.length}),v.d`
            <div class="fb-image" style="${t=>function(t){return(0,n.rf)(t.Images[0],"#000000","#FFFFFF")+`\n        --background-image:url('${(0,n.Ks)(t.Images[0],280,180)}');\n    `}(t)}">
                <div class="column destination-details gradient-text">
                    <a class="fb-destination-name text-clamp gradient-text" target="_blank" href="${t=>(0,n.B8)(t.TravelGuideUrl)}">
                        ${t=>t.Name}
                    </a>
                    ${(0,f.g)((t=>{var e;return(null===(e=t.InterestTypes)||void 0===e?void 0:e.length)>0}),v.d`
                        <div class="fb-destination-label gradient-text text-clamp">${(t,e)=>e.parent.getDestinationTags(t.InterestTypes)}</div>
                    `)}
                </div>
            </div>
        `)}
        
    </fluent-anchor>  
`,M=v.d`
    <fluent-anchor class="carousel-item-container full-bleed column"
        href="${t=>(0,n.B8)(t.ClickThroughUrl)}" target="_blank"
        data-t="${(t,e)=>e.parent.generateTelemetryTag(x.Slide,{[n.Yz.CardPosition]:`${e.index}`},t.CardTitle,t.ClickThroughUrl)}"
    >
        ${(0,f.g)((t=>t.BackgroundImage),v.d`
            <div class="background-img-container" style="--bg-img: url('${t=>(0,n.Ks)(t.BackgroundImage,240,280)}')">
                <div class="theme-region-container">
                    ${(0,f.g)((t=>t.Region),v.d`<span class="theme-region">${t=>t.Region}</span>`)}
                </div>
                <div class="theme-category">${t=>t.Theme.Name}</div>
            </div>
        `)}
    </fluent-anchor>
`,_=v.d`
<fluent-anchor class="carousel-item-container column" target="_blank" 
    href="${t=>(0,n.B8)(t.TravelGuideUrl)}"
    data-t="${(t,e)=>e.parent.generateTelemetryTag(x.Slide,{[n.Yz.CardPosition]:`${e.index}`,[n.Yz.SatoriId]:`${t.SatoriId}`},t.Name,t.TravelGuideUrl,t.Telemetry)}">
    ${(0,f.g)((t=>{var e;return null===(e=t.Images)||void 0===e?void 0:e.length}),v.d`
        <img class="destination-image" src=${(t,e)=>e.parent.getBingImageUrl(t.Images[0])} alt="">
    `)}
<div class="column destination-details">
    ${(0,f.g)((t=>t.InterestTypes&&t.InterestTypes[0]),v.d`
        <span class="destination-label">${t=>t.InterestTypes[0]}</span>
    `)}
    <a class="bold destination-name text-clamp" target="_blank" href="${t=>(0,n.B8)(t.TravelGuideUrl)}">
        ${t=>t.Name}
    </a>
    <span class="text-clamp destination-tags">
        ${(t,e)=>e.parent.getDestinationTags(t.Attraction)}
    </span>
</div>
</fluent-anchor>  
`,j=v.d`
<fluent-anchor 
    class="carousel-item-container column 
            ${(t,e)=>{var i,a,o;return(null===(o=null===(a=null===(i=e.parent)||void 0===i?void 0:i.data)||void 0===a?void 0:a.Metadata)||void 0===o?void 0:o.ZoomImageOnHover)?"zoom-on-hover":""}}
            ${(t,e)=>{var i,a,o;return(null===(o=null===(a=null===(i=e.parent)||void 0===i?void 0:i.data)||void 0===a?void 0:a.Metadata)||void 0===o?void 0:o.UseCircularImages)?"circular-image":""}}" 
            target="_blank" title="${t=>t.CardTitle}"
    href="${(t,e)=>(0,n.B8)(t.ClickThroughUrl)}"
    data-t="${(t,e)=>e.parent.generateTelemetryTag(x.Slide,{[n.Yz.CardPosition]:`${e.index}`},t.CardTitle,t.ClickThroughUrl)}">
        <div class="destination-image-container">
            <img 
                class="destination-image" 
                src=${(t,e)=>e.parent.getBingImageUrl(t.BackgroundImage)} alt="">
        </div>
        <div class="column destination-details">
            <span class="theme-label destination-tags">${t=>{var e;return null===(e=t.Theme)||void 0===e?void 0:e.Name}}</span>
            <a class="bold destination-name theme-name text-clamp" target="_blank" href="${(t,e)=>(0,n.B8)(t.ClickThroughUrl)}">
                ${t=>t.CardTitle}
            </a>
        </div>
</fluent-anchor>    
`,B=v.d`
<fluent-anchor class="carousel-item-container column packages" target="_blank"
        href="${(t,e)=>(0,n.B8)(t.ClickUrl)}"
        data-t="${(t,e)=>{var i;return e.parent.generateTelemetryTag(x.Slide,{[n.Yz.CardPosition]:`${e.index}`},null===(i=t.Destination)||void 0===i?void 0:i.Name,t.ClickUrl)}}">
    <div class="destination-image" style="background-image:url('${(t,e)=>e.parent.getBingImageUrl(t.Images[0])}')">
        <span class="pkg-destination-name">${t=>t.Destination.Name}</span>
    </div>
    <div class="package-details">
        <span class="package-tags">${(t,e)=>e.parent.getPackageTags(t)}</span>
        <a class="bold destination-name package-name text-clamp" target="_blank" href="${(t,e)=>(0,n.B8)(t.ClickUrl)}">
            ${t=>{var e;return null===(e=t.Hotel)||void 0===e?void 0:e.PropertyName}}
        </a>
        <span class="hotel-details">
            <span class="bold trip-price">${(t,e)=>(0,n.$2)(t.Price)}</span>
            <span class="trip-details">${(t,e)=>e.parent.getTripDetails(t)}</span>
        </span>
    </div>
</fluent-anchor>
`,z=v.d`
<fluent-anchor class="carousel-item-container column flights" target="_blank"
        href="${(t,e)=>t.TravelHubUrl}"
        data-t="${(t,e)=>{var i;return e.parent.generateTelemetryTag(x.Slide,{[n.Yz.CardPosition]:`${e.index}`},null===(i=t.ArrivalAirport)||void 0===i?void 0:i.Name,t.TravelHubUrl)}}">
    <div class="flight-image" style="--bg-img:url('${(t,e)=>e.parent.getBingImageUrl(t.Logo)}')"></div>
    <div class="column flight-details-container">
        <a class="bold destination-name flight-name text-clamp" target="_blank" href="${(t,e)=>t.TravelHubUrl}">
            ${(t,e)=>e.parent.getFlightsDestination(t)}
        </a>
        <span class="flight-details">
            <span class="bold flight-price">${(t,e)=>(0,n.$2)(t.Price)}</span>
            <span> onwards</span>
        </span>
    </div>
</fluent-anchor>
`,E=v.d`
    ${(0,f.g)(((t,e)=>e.parent.getSlideType(t)==a.ThemeBigBoldText),M)}
    ${(0,f.g)(((t,e)=>e.parent.getSlideType(t)==a.FullBleedDestination),I)}
    ${(0,f.g)(((t,e)=>e.parent.getSlideType(t)==a.Destination),_)}
    ${(0,f.g)(((t,e)=>e.parent.getSlideType(t)==a.Theme),j)}
    ${(0,f.g)(((t,e)=>e.parent.getSlideType(t)==a.Packages),B)}
    ${(0,f.g)(((t,e)=>e.parent.getSlideType(t)==a.Flights),z)}
    ${(0,f.g)(((t,e)=>e.parent.getSlideType(t)==a.RichContent),A)}
    ${(0,f.g)(((t,e)=>e.parent.getSlideType(t)==a.RichContentBigBoldText),A)}
`,H=v.d`
${(0,f.g)((t=>t.data),v.d`
<div class="travel-container"  data-t="${t=>t.generateTelemetryTag(x.Carousel)}" >
    ${(0,f.g)((t=>t.data),v.d`
        <div class="travel-header-group" part="travel-header-group">
        ${(0,f.g)((t=>t.data.Metadata),v.d`
            <a class="click-through-link travel-header-title" target="_blank" href="${t=>(0,n.B8)(t.data.Metadata.CarouselTitleClickUrl)}"
            data-t="${t=>t.generateTelemetryTag(x.Title,null,t.data.Metadata.CarouselTitleText,t.data.Metadata.CarouselTitleClickUrl)}" >
                ${(0,f.g)((t=>t.data.Metadata.ShowCarouselTitleIcon),v.d`${t=>t.data.Type==n.fZ.Flights?v.d`<div class="use-foreground-fill">${T}</div>`:L}`)}
                ${t=>t.data.Metadata.CarouselTitleText}
                ${(0,f.g)((t=>t.data.Type==n.fZ.Packages),v.d`
                    <span class="use-foreground-fill">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 7.95632C16 8.84692 15.2859 9.56884 14.4052 9.56884C14.3897 9.56884 14.3741 9.5686 14.3586 9.56811L10.5634 9.45515L7.7976 15.2391C7.57519 15.7044 7.10908 16 6.59795 16C6.18837 16 5.85633 15.6643 5.85633 15.2501C5.85633 15.2203 5.85809 15.1905 5.86161 15.1609L6.55214 9.33635L3.53636 9.24736L3.14391 10.333C2.99507 10.7447 2.60776 11.0184 2.17429 11.0184C1.77565 11.0184 1.45249 10.6917 1.45249 10.2887L1.45305 9.09285L0.803734 8.95616C0.33549 8.85736 0 8.44 0 7.95632C0 7.47279 0.335634 7.05559 0.803862 6.95712L1.45305 6.82051L1.45249 5.62403C1.45249 5.25197 1.72784 4.94493 2.08375 4.8999L2.17429 4.89422C2.60776 4.89422 2.99507 5.16801 3.14391 5.57966L3.53723 6.66511L6.54173 6.57604L5.86161 0.839149C5.85985 0.824338 5.85853 0.809478 5.85765 0.794594L5.85633 0.749878C5.85633 0.335729 6.18837 0 6.59795 0C7.06647 0 7.49718 0.248402 7.73705 0.648193L7.7976 0.760907L10.5228 6.45821L14.3586 6.3447C15.2388 6.31856 15.9734 7.01891 15.9993 7.90902L16 7.95632Z" />
                        </svg>
                        +
                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.8 5.76471C14.97 5.76471 15.9267 6.70493 15.996 7.89147L16 8.02941V13.3824C16 13.7235 15.7314 14 15.4 14C15.0962 14 14.8452 13.7676 14.8054 13.4662L14.8 13.3824V11.5294H1.2V13.3824C1.2 13.695 0.97428 13.9535 0.681416 13.9944L0.6 14C0.29624 14 0.045208 13.7676 0.00548 13.4662L0 13.3824V8.02941C0 6.825 0.91336 5.84014 2.06598 5.76882L2.2 5.76471H13.8ZM3.8 0H12.2C13.37 0 14.3267 0.940223 14.396 2.12675L14.4 2.26471V4.94118H12L11.9946 4.84514C11.952 4.46707 11.6606 4.1671 11.2933 4.12319L11.2 4.11765H9.6C9.18976 4.11765 8.8516 4.43556 8.80536 4.84514L8.8 4.94118H7.2L7.19464 4.84514C7.15192 4.46707 6.86056 4.1671 6.49328 4.12319L6.4 4.11765H4.8C4.38973 4.11765 4.05159 4.43556 4.00538 4.84514L4 4.94118H1.6V2.26471C1.6 1.06027 2.51336 0.0754354 3.66598 0.00413423L3.8 0Z" />
                        </svg>
                        <span class="hover-underline">&nbsp</span>
                    </span>
                `)}
            </a>
            <a class="click-through-link see-all-header-link" target="_blank" href="${t=>(0,n.B8)(t.data.Metadata.SeeAllClickUrl)}" 
            data-t="${t=>t.generateTelemetryTag(x.SeeAllLink,null,t.data.Metadata.SeeAllText,t.data.Metadata.SeeAllClickUrl)}">
                ${t=>t.data.Metadata.SeeAllText}
            </a>
        `)}
        </div>
        <msft-horizontal-card-slider
            class="travel-destination-carousel-container ${t=>{var e;return((null===(e=t.data)||void 0===e?void 0:e.Metadata.ShowLabel)?" show-categories":" ")+(t.hasRichContentCards?" rich-content-crsl":" ")+(t.isBigBoldVersion?" v-big-bold":" ")+(t.data.Type==n.fZ.Flights?"flights-crsl":" ")+(t.isChevronOnBorder?" chev-on-brd":" ")}}"
            part="travel-destination-carousel-container"
            :flipperPreviousTelemetryTag="${t=>t.generateTelemetryTag(x.LeftChevron,null,"previousSlideArrow")}"
            :flipperNextTelemetryTag="${t=>t.generateTelemetryTag(x.RightChevron,null,"nextSlideArrow")}">
            ${(0,f.g)((t=>{var e;return null===(e=t.data)||void 0===e?void 0:e.DestinationData}),v.d`
                ${(0,b.rx)((t=>t.data.DestinationData),E,{positioning:!0})}
            `)}
            ${(0,f.g)((t=>{var e;return null===(e=t.data.Metadata)||void 0===e?void 0:e.SeeAllCardText}),v.d`
                <fluent-anchor class="carousel-item-container seeall-slide column" target="_blank" href="${t=>(0,n.B8)(t.data.Metadata.SeeAllCardClickUrl)}"
                 data-t="${t=>t.generateTelemetryTag(x.SeeAllSlide,null,t.data.Metadata.SeeAllCardText,t.data.Metadata.SeeAllCardClickUrl)}">
                    <div class="seeall-arrow-container">
                        ${y}
                    </div>
                    <div class="seeall-slide-text">${t=>t.data.Metadata.SeeAllCardText}</div> 
                </fluent-anchor>
            `)}   
        </msft-horizontal-card-slider>
    `)}
</div>`)}
`;var O=i(22528),D=i(63070),R=i(26922),P=i(59403),Z=i(57905);let V=class extends d{};V=(0,o.gn)([(0,r.M)({name:"msn-travel-destination-carousel",template:H,styles:m})],V),(0,D.z)().withShadowRootMode("closed").withElementDisambiguation((()=>Z.h.ignoreDuplicate)).register((0,R.QT)()),(0,D.z)().withShadowRootMode("open").withElementDisambiguation((()=>Z.h.ignoreDuplicate)).register((0,P.EK)()),Z.K.getOrCreate().withShadowRootMode("open").withElementDisambiguation((()=>Z.h.ignoreDuplicate)).withPrefix("msft").register((0,O.sG)())},14039:function(t,e,i){i.d(e,{t:function(){return w}});var a=i(33940),o=i(89346),n=i(39181),r=i(58952);const s=n.d`
<div class="${t=>t.overlay&&"overlay"}"></div>
<div id="${t=>t.id}" class="widget-host" ${(0,r.i)("widgetHost")} data-t="${t=>{var e;return null===(e=t.telemetryObject)||void 0===e?void 0:e.getMetadataTag()}}">
</div>
`;var l=i(26755),d=i(53046),c=i(40082),p=i(15933);const g=d.i`
    .widget-host {
        --elevation: 4;
        height: 100%;
        background: ${l.IfY};
        color: ${l.CHi};
        border-radius: calc(var(--layer-corner-radius) * 2px);
        box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(0.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(0.13 * (2 - var(--background-luminance, 1))));
    }

    .overlay {
        height: 100%;
        width: 100%;
        z-index: 999;
        position: absolute;
    }
    `.withBehaviors((0,c.vF)(d.i`
            .widget-host {
                forced-color-adjust: none;
                background: ${p.H.Canvas};
                box-shadow: ${p.H.CanvasText} 0px 0px 0px 1px;
            }
        `));var h=i(65620),u=i(87697),m=i(26415),v=i(19388),f=i(65135),b=i(16339),x=i(75361),y=i(63051);class C extends o.H{constructor(){super(...arguments),this.overlay=!1,this.widgetModelApi=window.__com_microsoft_dsh_widgetModelApiFactory,this.subscriptions=[],this.onDashboardVisibilityChange=async t=>{if(!this.widgetFrame||this.isInitialSubscription)return void(this.isInitialSubscription=!1);const e=t&&this.isInViewport();this.widgetFrame.onVisibleStateChanged(e)},this.sizeChangeHandler=(t,e)=>{"onSizeChangeEnd"===t&&this.widgetResizedCallback&&this.widgetResizedCallback(this.id,e)},this.attachIntersectionObserver=()=>{if(this.intersectionObserver||!this.widgetFrame)return;this.intersectionObserver=new IntersectionObserver((t=>{t&&t.forEach((t=>{this.widgetFrame&&this.widgetFrame.onVisibleStateChanged(b.gL.get(b.Iq.IsDashboardVisible)&&t.isIntersecting)}))}),{root:null,rootMargin:"0px",threshold:0}),this.intersectionObserver.observe(this.widgetHost)},this.isInViewport=()=>{if(!this.widgetHost)return!1;const t=this.widgetHost.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=document.documentElement.clientHeight&&t.right<=document.documentElement.clientWidth}}async connectedCallback(){if(super.connectedCallback(),this.isInitialSubscription=!0,this.subscriptions.push(b.gL.subscribe(b.Iq.IsDashboardVisible,this.onDashboardVisibilityChange)),this.attachIntersectionObserver(),this.addEventListeners(),b.gL.set(b.Iq.NonPeregrineWidgetTelemetryObject,Object.assign(Object.assign({},b.gL.get(b.Iq.NonPeregrineWidgetTelemetryObject)),{[this.id]:this.telemetryObject})),!this.renderer&&this.widgetModelApi)try{this.renderer=this.widgetModelApi.tryGetApi("renderer",x.l1,x.l1)}catch(t){f.M0.sendAppErrorEvent(Object.assign(Object.assign({},m.F$$),{message:"Error calling renderer api on widgetModelApi",pb:Object.assign(Object.assign({},m.F$$.pb),{cardType:this.id,error:JSON.stringify(t),customMessage:`Error message: ${t&&t.message}`})}))}if(!this.widgetInstance){const t=y.h1[this.id]||{},{widgetId:e,experienceName:i}=t,a=y.Yn.get(this.id)&&this.instanceId?this.instanceId:void 0;this.renderer&&this.renderer.renderWidget(this.widgetHost,e||this.id,a,this.cardSize).then((t=>{t&&(this.widgetInstance=t.widgetInstance,this.widgetFrame=t),this.widgetSizeApi||(this.widgetSizeApi=this.widgetInstance&&this.widgetInstance.tryGetApi("sizes",x.l1,x.l1)),this.addEventListeners(),this.attachIntersectionObserver(),this.widgetRenderedCallback&&(i&&(0,v.o_)(i),this.widgetRenderedCallback(this.id,this.widgetInstance&&this.widgetInstance.instanceId))})).catch((t=>{f.M0.sendAppErrorEvent(Object.assign(Object.assign({},m.OcW),{message:"Error calling renderWidget api",pb:Object.assign(Object.assign({},m.OcW.pb),{widgetId:e,cardType:this.id,error:JSON.stringify(t),customMessage:`Error message: ${t&&t.message}`})}))}))}}disconnectedCallback(){super.disconnectedCallback(),this.subscriptions.forEach((t=>t.unsubscribe())),this.unsetIntersectionObserver(),this.removeEventListeners()}addEventListeners(){this.widgetSizeApi&&this.widgetSizeApi.addEventListener(this.sizeChangeHandler)}removeEventListeners(){this.widgetSizeApi&&this.widgetSizeApi.removeEventListener(this.sizeChangeHandler)}unsetIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}}(0,a.gn)([(0,h.Lj)({mode:"boolean"})],C.prototype,"overlay",void 0),(0,a.gn)([u.LO],C.prototype,"id",void 0),(0,a.gn)([u.LO],C.prototype,"cardSize",void 0),(0,a.gn)([u.LO],C.prototype,"instanceId",void 0),(0,a.gn)([u.LO],C.prototype,"telemetryObject",void 0);let w=class extends C{};w=(0,a.gn)([(0,o.M)({name:"msn-widget-host",template:s,styles:g})],w)},28258:function(t,e,i){i.r(e),i.d(e,{MsnZIndexCard:function(){return z}});var a,o=i(33940),n=i(40082),r=i(67020),s=i(56201),l=i(26755),d=i(15933),c=i(89346),p=i(65620),g=i(87697);!function(t){t.imageAtBottom="imageAtBottom",t.imageAtTop="imageAtTop",t.imageAtRight9By16="imageAtRight9By16",t.imageAtRight3By4="imageAtRight3By4",t.animatedImagery9by16="animatedImagery9by16"}(a||(a={}));class h extends c.H{constructor(){super(...arguments),this.layout=a.imageAtTop,this.headingMaxLines=5,this.documentDirection="ltr",this.headinglevel=3}handleStartActionsContentChange(){this.startActionsContainer.classList.toggle("start-actions",this.startActions.assignedNodes().length>0),this.hasFooter=this.endActions.assignedNodes().length>0}handleEndActionsContentChange(){this.endActionsContainer.classList.toggle("end-actions",this.endActions.assignedNodes().length>0),this.hasFooter=this.endActions.assignedNodes().length>0}abstractChanged(){this.$fastController.isConnected&&(this.hasAbstract=this.abstract.length>0)}handleMediaContentChange(){this.mediaContainer.classList.toggle("media",this.media.assignedNodes().length>0)}handleBackgroundImageContentChange(){this.backgroundImageContainer.classList.toggle("background-image",this.backgroundImage.assignedNodes().length>0)}handleZIndexCardLinkClick(t){return this.$emit("link-invoked",t),!0}}(0,o.gn)([p.Lj],h.prototype,"layout",void 0),(0,o.gn)([(0,p.Lj)({attribute:"heading-max-lines"})],h.prototype,"headingMaxLines",void 0),(0,o.gn)([(0,p.Lj)({attribute:"document-direction"})],h.prototype,"documentDirection",void 0),(0,o.gn)([(0,p.Lj)({attribute:"heading-level",mode:"fromView",converter:p.Id})],h.prototype,"headinglevel",void 0),(0,o.gn)([(0,p.Lj)({mode:"fromView"})],h.prototype,"href",void 0),(0,o.gn)([g.LO],h.prototype,"anchorTelemetryTag",void 0),(0,o.gn)([g.LO],h.prototype,"mediaNodes",void 0),(0,o.gn)([g.LO],h.prototype,"hasAbstract",void 0),(0,o.gn)([g.LO],h.prototype,"hasFooter",void 0),(0,o.gn)([g.LO],h.prototype,"abstract",void 0),(0,o.gn)([g.LO],h.prototype,"iconSlottedNodes",void 0),(0,o.gn)([(0,p.Lj)({attribute:"image-priority",mode:"boolean"})],h.prototype,"imagePriority",void 0),(0,o.gn)([p.Lj],h.prototype,"target",void 0),(0,o.gn)([g.LO],h.prototype,"hoverActionsSlottedNodes",void 0);var u=i(53046);const{imageAtBottom:m,imageAtTop:v,imageAtRight9By16:f,imageAtRight3By4:b,animatedImagery9by16:x}=a,y="#373737",C="white",w=t=>t.withBehaviors((0,n.vF)(u.i`
        .heading {
            color: ${d.H.LinkText};
            background: ${d.H.ButtonFace};
        }
        .footer,
        .start-actions,
        .end-actions,
        ::slotted([slot="start-actions"]),
        ::slotted([slot="end-actions"]) {
            background: ${d.H.ButtonFace};
            color: ${d.H.ButtonText};
            fill: currentcolor;
        }
        ::slotted(fluent-button[appearance="stealth"]:not(:hover)) {
            background: ${d.H.ButtonFace};
        }
    `)),$=w(u.i`
    :host span.title_1x_2y,
    :host span.title_1x_3y {
        font-size: 20px;
    }
    ${(0,r.j)("flex")} :host {
        position: relative;
        width: auto;
        box-sizing: border-box;
        font-family: ${l.SVJ};
        flex-direction: column;
        outline: none;
        overflow: hidden;
        height: 100%;
        width: 100%;
    }

    :host(:hover) .hover-actions {
        opacity: 1;
        transition: opacity 0.2s ease-in-out;
    }

    :host(:hover) .media {
        filter: brightness(0.98);
    }

    .body {
        display: grid;
        justify-content: center;
        row-gap: 8px;
        column-gap: 10px;
        grid-template-columns: 1fr auto;
        grid-template-rows: auto;
    }

    .footer {
        padding-inline-start: var(--footer-start-padding, 16px);
        padding-inline-end: var(--footer-start-padding, 16px);
        padding-top: var(--footer-padding-top, 0);
        padding-bottom: var(--footer-padding-bottom, 4px);
        margin-top: 16px;
        font-size: var(--footer-font-size, ${l.sNp});
        line-height: var(--footer-line-height, ${l.vgC});
    }

    .footer,    
    .start-actions,
    .end-actions {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        color: ${l.Q5n};
        fill: ${l.Q5n};
    }    

    :host([layout=${v}]) .footer {
        position: absolute;
        bottom: 24px;
        padding: 0 24px;
        margin-top: unset;
        width: 268px;
        padding-inline-start: 24px;
        padding-inline-end: 24px;
    }

    .footer__hidden {
        display: none;
    }

    .heading-wrapper {
        grid-row: 1;
        display: flex;
        flex-direction: column;
    }

    .heading-wrapper a:after {
        content: "";
        height: 304px;
        position: absolute;
        width: 300px;
        z-index: 1;
    }

    :host([layout=${v}]) .heading-wrapper a:after {
        top: -52px;
    }

    :host([layout=${m}]) .heading-wrapper a:after {
        top: -38px;
    }

    .media {
        display: flex;
        flex-direction: row;
        position: absolute;
    }

    :host([layout=${m}]) .media {
        bottom: 4px;
    }

    :host([layout=${v}]) .media {
        top: 8px;
    }

    :host([image-priority]) .body {
        grid-template-columns: 1;
    }

    :host([image-priority]) .media-wrapper {
        grid-row: 1;
        grid-column: span 2;
        margin: 0;
        display: flex;
        justify-content: center;
    }

    :host([image-priority]) .heading-container {
        grid-row: 2;
        grid-column: span 2;
        padding-inline-start: var(--heading-start-padding, 16px);
        padding-inline-end: var(--heading-end-padding, 16px);
    }    

    :host([layout=${m}]) .heading-container {
        top: 39px;
        position: absolute;
    }
    
    ::slotted([slot="start-actions"]),
    ::slotted([slot="end-actions"]){
        z-index: 2;
        display: grid;
        gap: 5px;
        align-items: center;
        grid-auto-flow: column;
    }

    :host([layout=${v}]) ::slotted([slot="call-to-action"]) {
        top: 230px;
    }

    :host([layout=${m}]) ::slotted([slot="call-to-action"]) {
        top: -40px;
    }
    
    ::slotted([slot="call-to-action"]) {
        width: calc(100% - 32px);
        grid-row: 3;
        grid-column: 1 / span 2;
        margin: 0 24px;
    }

    ::slotted(fluent-button[slot="start-actions"]),
    ::slotted(fluent-button[slot="end-actions"]) {
        color: ${l.Q5n};
        fill: ${l.Q5n};
    }

    .heading {
        -webkit-box-orient: vertical;
        -webkit-line-clamp: var(--heading-max-lines, 2);
        color: ${l.CHi};
        display: -webkit-box;
        font-size: var(--heading-font-size, ${l.PwC});
        font-weight: 600;
        line-height: var(--heading-line-height, ${l.b3W});
        outline: none;
        overflow: hidden;
        text-decoration: none;
        white-space: initial;
    }

    .mask {
        display: none;
    }

    .heading:hover,
    .heading:${s.b} {
        text-decoration: underline;
    }

    @media (prefers-color-scheme: dark) {
        .heading-gradient-background {
            background: ${y};
        }
    }
      
    @media (prefers-color-scheme: light) {
        .heading-gradient-background {
            background: ${C};
        }
    }

    .heading-gradient-background {
        border-radius: calc(${l.rSr} * 1px);
        box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(0.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(0.13 * (2 - var(--background-luminance, 1))));
        height: 252px;
        left: 8px;
        position: absolute;
        width: 300px;
    }

    :host([layout=${m}]) .heading-gradient-background {
        top: 8px;
    }

    :host([layout=${v}]) .heading-gradient-background {
        bottom: 8px;
    }

    :host([layout=${v}]) .heading-gradient-background .heading {
        padding-top: 137px;
        padding-right: 16px;
    }

    .heading::after {
        bottom: 0;
        content: "";
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
    }
`),k=w(u.i`
:host([layout=${b}]) span.title_1x_2y,
:host([layout=${b}]) span.title_1x_3y {
    font-size: 20px;
}
:host([layout=${b}]) .heading-wrapper {
    grid-row: 1;
    display: flex;
    flex-direction: column; 
}

:host([layout=${b}]) .heading-wrapper a:after { 
    content: "";
    height: 304px;
    position: absolute;
    width: 300px;
    z-index: 1;
}

:host([layout=${b}]) .heading {
    overflow: hidden;
    text-decoration: none;
    font-size: 20px;
    line-height: 28px;
    width: 121px;
    margin-top: 14px;
    overflow-wrap: break-word;
}

:host([layout=${b}][document-direction="rightToLeft"]) .heading-wrapper a:after{
    left: 0px;
}

:host([layout=${b}][document-direction="rightToLeft"]) .heading {
    margin-right: 179px;
}

:host([layout=${b}][heading-max-lines="eight-lines-heading"]) .heading{
    --heading-max-lines: 8;
}

:host([layout=${b}][heading-max-lines="five-lines-heading"]) .heading{
    --heading-max-lines: 5;
}

:host([layout=${b}]) ::slotted([slot="call-to-action"]) {
    width: 102px;
    top: 175px;
    position: absolute;
}

:host([layout=${b}][document-direction="rightToLeft"]) ::slotted([slot="call-to-action"]){
    left: 16px;
}

:host([layout=${b}]) .media-wrapper {
    top: 57px;
    left: 162px;
    position: absolute;
    width: 113px;
    height: 202px;
}

:host([layout=${b}][document-direction="rightToLeft"]) .media-wrapper{
    left: 178px;
}

:host([layout=${b}]) .heading:hover,
:host([layout=${b}]) .heading:${s.b} {
    text-decoration: underline;
}

@media (prefers-color-scheme: dark) {
    :host([layout=${b}]) .heading-gradient-background {
        background: ${y};
    }

    :host([layout=${b}]) ::slotted([slot="call-to-action"]),
    :host([layout=${b}]) ::slotted([slot="start-actions"]),
    :host([layout=${b}]) .heading {
        color: #ffffff;
    }
}

@media (prefers-color-scheme: light) {
    :host([layout=${b}]) .heading-gradient-background {
        background: ${C};
    }  
    
    :host([layout=${b}]) ::slotted([slot="call-to-action"]),
    :host([layout=${b}]) ::slotted([slot="start-actions"]),
    :host([layout=${b}]) .heading {
        color: #222222;
    }
}

:host([layout=${b}]) .heading-gradient-background {
    border-radius: calc(${l.rSr} * 1px);
    box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(0.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(0.13 * (2 - var(--background-luminance, 1))));
    height: 304px;
    left: 8px;
    position: absolute;
    width: 241px;
    top: 8px;
}

:host([layout=${b}][document-direction="rightToLeft"]) .heading-gradient-background{
    margin-left: 16px;
}


:host([layout=${b}]) .footer {
    display: flex;
    position: absolute;
    bottom: 16px;
    width: 209px;
    left: 4px;
}

:host([layout=${b}][document-direction="rightToLeft"]) .footer{
    right: 55px;
}

:host([layout=${b}]) ::slotted([slot="start-actions"]) {
    position: unset;
    z-index: 2;
    gap: 8px;
    align-items: center;
    grid-auto-flow: column;
}

:host([layout=${b}]) .start-actions {
    width: 127px;
}
`),L=w(u.i`
    :host([layout=${f}]) span.title_1x_2y,
    :host([layout=${f}]) span.title_1x_3y {
        font-size: 20px;
    }
    :host([layout=${f}]) .heading-wrapper{ 
        content: "";
        height: 304px;
        position: absolute;
        width: 300px;
        z-index: 1;
    }

    :host([layout=${f}][document-direction="rightToLeft"]) .heading-wrapper{
        left: 0px;
    }

    :host([layout=${f}][document-direction="rightToLeft"]) .heading {
        margin-right: 179px;
    }
    
    :host([layout=${f}]) .heading {
        overflow: hidden;
        text-decoration: none;
        font-size: 20px;
        line-height: 28px;
        width: 121px;
        margin-top: 14px;
        overflow-wrap: break-word;
    }

    :host([layout=${f}][heading-max-lines="eight-lines-heading"]) .heading{
        --heading-max-lines: 8;
    }

    :host([layout=${f}][heading-max-lines="five-lines-heading"]) .heading{
        --heading-max-lines: 5;
    }

    :host([layout=${f}]) ::slotted([slot="call-to-action"]) {
        width: 102px;
        top: 175px;
        left: 0px;
    }

    :host([layout=${f}][document-direction="rightToLeft"]) ::slotted([slot="call-to-action"]){
        left: 16px;
    }

    :host([layout=${f}]) .media-wrapper {
        top: 31px;
        left: 162px;
        position: absolute;
        width: 113px;
        height: 202px;
    }

    :host([layout=${f}][document-direction="rightToLeft"]) .media-wrapper{
        left: 178px;
    }

    :host([layout=${f}]) .heading:hover,
    :host([layout=${f}]) .heading:${s.b} {
        text-decoration: underline;
    }

    @media (prefers-color-scheme: dark) {
        :host([layout=${f}]) .heading-gradient-background {
            background: ${y};
        }

        :host([layout=${f}]) ::slotted([slot="call-to-action"]),
        :host([layout=${f}]) ::slotted([slot="start-actions"]),
        :host([layout=${f}]) .heading {
            color: #ffffff;
        }
    }

    @media (prefers-color-scheme: light) {
        :host([layout=${f}]) .heading-gradient-background {
            background: ${C};
        }  
        
        :host([layout=${f}]) ::slotted([slot="call-to-action"]),
        :host([layout=${f}]) ::slotted([slot="start-actions"]),
        :host([layout=${f}]) .heading {
            color: #222222;
        }
    }

    :host([layout=${f}]) .heading-gradient-background {
        border-radius: calc(${l.rSr} * 1px);
        box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(0.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(0.13 * (2 - var(--background-luminance, 1))));
        height: 304px;
        left: 8px;
        position: absolute;
        width: 241px;
        top: 8px;
    }

    :host([layout=${f}][document-direction="rightToLeft"]) .heading-gradient-background{
        margin-left: 16px;
    }


    :host([layout=${f}]) .footer {
        display: flex;
        position: absolute;
        bottom: 16px;
        left: 8px;
        width: 209px;
    }

    :host([layout=${f}][document-direction="rightToLeft"]) .footer{
        right: 55px;
    }

    :host([layout=${f}]) ::slotted([slot="start-actions"]) {
        position: unset;
        z-index: 2;
        gap: 8px;
        align-items: center;
        grid-auto-flow: column;
    }

    :host([layout=${f}]) .start-actions {
        width: 127px;
    }

`),T=w(u.i`
    :host([layout=${x}]) span.title_1x_2y,
    :host([layout=${x}]) span.title_1x_3y {
        font-size: 20px;
    }
    :host([layout=${x}]) .heading-wrapper{ 
        content: "";
        height: 304px;
        position: absolute;
        width: 300px;
        z-index: 1;
    }

    :host([layout=${x}][document-direction="rightToLeft"]) .heading-wrapper{
        left: 0px;
    }

    :host([layout=${x}][document-direction="rightToLeft"]) .heading {
        margin-right: 179px;
    }
    
    :host([layout=${x}]) .heading {
        overflow: hidden;
        text-decoration: none;
        font-size: 20px;
        line-height: 28px;
        width: 121px;
        margin-top: 14px;
        overflow-wrap: break-word;
    }

    :host([layout=${x}][heading-max-lines="eight-lines-heading"]) .heading{
        --heading-max-lines: 8;
    }

    :host([layout=${x}][heading-max-lines="five-lines-heading"]) .heading{
        --heading-max-lines: 5;
    }

    :host([layout=${x}]) ::slotted([slot="call-to-action"]) {
        width: 102px;
        top: 175px;
        left: 0px;
    }

    :host([layout=${x}][document-direction="rightToLeft"]) ::slotted([slot="call-to-action"]){
        left: 16px;
    }

    :host([layout=${x}]) .media-wrapper {
        position: absolute;
        width: 141px;
        height: 250px;
        right: 8px;
        top: 8px;
    }

    :host([layout=${x}][document-direction="rightToLeft"]) .media-wrapper{
        left: 178px;
    }

    :host([layout=${x}]) .heading:hover,
    :host([layout=${x}]) .heading:${s.b} {
        text-decoration: underline;
    }

    @media (prefers-color-scheme: dark) {
        :host([layout=${x}]) .heading-gradient-background {
            background: ${y};
        }

        :host([layout=${x}]) ::slotted([slot="call-to-action"]),
        :host([layout=${x}]) ::slotted([slot="start-actions"]),
        :host([layout=${x}]) .heading {
            color: #ffffff;
        }
    }

    @media (prefers-color-scheme: light) {
        :host([layout=${x}]) .heading-gradient-background {
            background: ${C};
        }  
        
        :host([layout=${x}]) ::slotted([slot="call-to-action"]),
        :host([layout=${x}]) ::slotted([slot="start-actions"]),
        :host([layout=${x}]) .heading {
            color: #222222;
        }
    }

    :host([layout=${x}]) .heading-gradient-background {
        border-radius: calc(${l.rSr} * 1px);
        box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(0.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(0.13 * (2 - var(--background-luminance, 1))));
        height: 304px;
        left: 8px;
        position: absolute;
        width: 300px;
        top: 8px;
    }

    :host([layout=${x}][document-direction="rightToLeft"]) .heading-gradient-background{
        margin-left: 16px;
    }


    :host([layout=${x}]) .footer {
        display: flex;
        position: absolute;
        bottom: 16px;
        left: 8px;
        width: 268px;
    }

    :host([layout=${x}][document-direction="rightToLeft"]) .footer{
        right: 0px;
    }

    :host([layout=${x}][document-direction="rightToLeft"]) ::slotted([slot="end-actions"]) {
        margin-left: 8px;
    }

    :host([layout=${x}]) ::slotted([slot="start-actions"]) {
        position: unset;
        z-index: 2;
        gap: 8px;
        align-items: center;
        grid-auto-flow: column;
    }
`);var S=i(39181),F=i(58952),A=i(81422),I=i(58689),M=i(13988),_=i(90960);const j=S.d`
    <div
        class="footer ${t=>t.hasAbstract?"has-abstract-footer":""} ${t=>t.hasFooter?"":"footer__hidden"}"
        part="footer"
    >
        <span part="start-actions" ${(0,F.i)("startActionsContainer")}>
            <slot
                name="start-actions"
                ${(0,F.i)("startActions")}
                @slotchange=${t=>t.handleStartActionsContentChange()}
            ></slot>
        </span>
        <span part="end-actions" ${(0,F.i)("endActionsContainer")}>
            <slot
                name="end-actions"
                ${(0,F.i)("endActions")}
                @slotchange=${t=>t.handleEndActionsContentChange()}
            ></slot>
        </span>
    </div>
`,B=S.d`
    <template
        ${(0,A.p)({property:"mediaNodes",filter:(0,I.R)("[slot='media'], [slot='icon']")})}
    >
        <span part="background-image" ${(0,F.i)("backgroundImageContainer")}>
            <slot
                name="background-image"
                ${(0,F.i)("backgroundImage")}
                @slotchange=${t=>t.handleBackgroundImageContentChange()}
            ></slot>
        </span>
        <div class="mask" part="mask"></div>
        <div class="heading-gradient-background"> 
            ${(0,M.g)((t=>t.layout===a.imageAtBottom),j)}
            <div class="heading-container" part="heading-container">
                <slot name="attribution"></slot>
                <span
                    class="heading-wrapper"
                    part="heading-wrapper"
                    role="heading"
                    aria-level=${t=>t.headinglevel}
                >
                    <a
                        class="heading"
                        part="heading"
                        href=${t=>t.href?t.href:void 0}
                        target=${t=>t.target?t.target:void 0}
                        @click=${(t,e)=>t.handleZIndexCardLinkClick(e.event)}
                        data-t="${t=>t.anchorTelemetryTag}"
                        ><slot></slot
                    ></a>
                </span>
            </div>
        </div>
        <div class="body ${t=>t.hasAbstract?"has-abstract":""}" part="body">
            ${(0,M.g)((t=>{var e;return(null===(e=t.mediaNodes)||void 0===e?void 0:e.length)>0}),S.d` <div class="media-wrapper" part="media-wrapper">
                    <div part="media" ${(0,F.i)("mediaContainer")}>
                        <slot
                            name="media"
                            ${(0,F.i)("media")}
                            @slotchange=${t=>t.handleMediaContentChange()}
                        ></slot>
                        <span
                            part="icon"
                            ${(0,F.i)("iconContainer")}
                            class="${t=>t.iconSlottedNodes&&t.iconSlottedNodes.length?"icon":"icon_hidden"}"
                        >
                            <slot
                                name="icon"
                                ${(0,F.i)("icon")}
                                ${(0,_.Q)("iconSlottedNodes")}
                            ></slot>
                        </span>
                    </div>
                </div>`)}
            <div class="abstract">
                <slot name="abstract" ${(0,_.Q)("abstract")}></slot>
            </div>
            <slot name="call-to-action"></slot>
            ${(0,M.g)((t=>t.layout!==a.imageAtBottom),j)}
        </div>
        <span
            part="hover-actions"
            class="${t=>t.hoverActionsSlottedNodes&&t.hoverActionsSlottedNodes.length?"hover-actions":"hover-actions_hidden"}"
        >
            <slot name="hover-actions" ${(0,_.Q)("hoverActionsSlottedNodes")}></slot>
        </span>
    </template>
`;let z=class extends h{};z=(0,o.gn)([(0,c.M)({name:"msn-z-index-card",template:B,styles:[$,L,k,T],shadowOptions:{delegatesFocus:!0}})],z)},26382:function(t,e,i){var a=i(33940),o=i(83227),n=i(53076),r=i(8158);r.n.registerExperience(o.x.bingHomepageFeed,(()=>Promise.resolve().then(i.bind(i,37663)))),r.n.registerExperience(o.x.cardActionWC,(()=>i.e("card-actions-wc").then(i.bind(i,92301)))),r.n.registerExperience(o.x.coldStartWC,(()=>i.e("cold-start-wc").then(i.bind(i,86624)))),r.n.registerExperience(o.x.esportsCard,(()=>i.e("esports-card").then(i.bind(i,78128)))),r.n.registerExperience(o.x.familyCard,(()=>i.e("family-card").then(i.bind(i,49450)))),r.n.registerExperience(o.x.moneyInfoCardWC,(()=>i.e("money-info-card-wc").then(i.bind(i,90673)))),r.n.registerExperience(o.x.socialBarWC,(()=>i.e("social-bar-wc").then(i.bind(i,83060)))),r.n.registerExperience(o.x.sportsCardWC,(()=>i.e("sports-card-wc").then(i.bind(i,51385)))),r.n.registerExperience(o.x.sportsOlympicCardWC,(()=>i.e("sports-olympic-card-wc").then(i.bind(i,54854)))),r.n.registerExperience(o.x.tipsCard,(()=>i.e("tips-card").then(i.bind(i,94527)))),r.n.registerExperience(o.x.toastWC,(()=>i.e("toast").then(i.bind(i,56693)))),r.n.registerExperience(o.x.trafficCardWC,(()=>i.e("traffic-card-wc").then(i.bind(i,72857)))),r.n.registerExperience(o.x.weatherCardWC,(()=>i.e("weather-card").then(i.bind(i,65557)))),r.n.registerExperience(n.z.SportsData,(()=>i.e("sports-data-service").then(i.bind(i,29323)))),r.n.registerExperience(n.z.TopicData,(()=>i.e("topic-data-connector").then(i.bind(i,21064)))),r.n.registerExperience(n.z.WeatherData,(()=>i.e("weather-card-connector").then(i.bind(i,7482))));var s=i(68364),l=i(26415),d=i(7282),c=i(53505),p=i(95527),g=i(3138),h=i(79159),u=i(75816),m=i(65135),v=i(66850),f=i(64550),b=i(13400),x=i(54804),y=i(16078),C=i(40715),w=i(85245),$=i(66634),k=i(12108),L=i(33799),T=i(88828),S=i(53660),F=i(58155),A=i(37457),I=i(69973),M=i(82855);class _{static trackCallbacks(){switch((0,T.Bn)().currentColumnArrangement){case S.K$.c1:_.viewType="size1column";break;case S.K$.c2:_.viewType="size2column";break;case S.K$.c3:_.viewType="size3column";break;case S.K$.c4:_.viewType="size4column";break;case S.K$.c5:_.viewType="size5column"}return _.viewType}static getPageTelemetryContract(t,e,i,a){const o=x.Al&&x.Al.ClientSettings||{},n=o.browser&&"true"===o.browser.ismobile||o.deviceFormFactor===I.p.Phone,r="true"===o.static_page,s=o.audienceMode===k.F.Enterprise,l=o.pagetype?o.pagetype:p.WF,{telemetry:d=null}=b.jG.WidgetAttributes||{},c=d&&d.ocid||F.c.getQueryParameterByName("ocid",a)||p.Pp,g=b.jG&&b.jG.CurrentRequestTargetScope&&b.jG.CurrentRequestTargetScope.pageExperiments&&b.jG.CurrentRequestTargetScope.pageExperiments.join(",");return{disableAutoCalculateDwellTime:!0,page:{appType:b.jG.AppType,name:p.jM,config:64,product:p.J5,type:l,isJSEnabled:!0,isAutoRefresh:!1,isStatic:r,url:a,canvas:"Browser",ocid:c,isAdEnabled:!1,content:{vertical:e.vertical||"homepage",category:p.D$,title:"bingNoResultsPage"===l?"No results page - Search":t.document.title,id:"",domainId:e.domainId},viewType:this.trackCallbacks()},flight:{id:g},locale:{mkt:b.jG.CurrentMarket},browser:{isMobile:n,deviceGroup:"unknown"},user:{isSignedIn:i,isSso:!1,aadState:s?L.mv.AadAccount:L.mv.NonAadAccount}}}static getTelemetryInitConfig(){var t;const e=b.jG.IsChinaCompliance||x.Al&&x.Al.Locale&&"zh-cn"===x.Al.Locale.toLowerCase(),i=(null===(t=null===x.Al||void 0===x.Al?void 0:x.Al.ClientSettings)||void 0===t?void 0:t.audienceMode)===k.F.Enterprise&&_.hasFlight("prg-entdash");return(0,A.$)(x.Al.ClientSettings.domain,b.jG.Environment,e,i)}static hasFlight(t){const e=b.jG.CurrentRequestTargetScope&&b.jG.CurrentRequestTargetScope.pageExperiments,i=(0,M.Mx)(e);return i&&i.includes(t)}}var j=i(15231);(0,a.mG)(void 0,void 0,void 0,(function*(){try{const{requestContext:t,initEndMeasure:e,locationHref:i,app:{store:a,rootReducer:o}}=v.wf,r=_.getTelemetryInitConfig();r.push({type:u.G.Debug,mapper:new d.k,transporterConfig:{callback:f.A}}),(0,m.uZ)(new c.o({anonCookieName:"anon",trackingSystems:r,autoCaptureContentView:!1}));const k=_.getPageTelemetryContract(window,{},!1,i);m.M0.initPage(k,b.jG.ActivityIdLowerCaseNoHypens,b.jG.BuildVersion,b.jG.FrontDoorMuid),m.M0.disableTrackingSystem(u.G.Comscore),m.M0.internalErrors&&m.M0.internalErrors.forEach((t=>{(0,s.OO)(t.error,l.voe,t.message)})),b.jG.TrackInfo={sitePage:{page_product:p.J5,page_type:x.Al.ClientSettings.pagetype}},v.wf.stampTmplForExperimentation();const L=v.wf.parseWidgetDataAttribute();(0,j.Q)(L&&L.cc),(0,w._)({sharedStateConnector:!0});const T=new g.g(n.z.ExperienceTrackerWidgets,"",o,new h.P,a,{},t);function S(t){(0,$.c)({experienceTracker:T,widgetBindInfo:t}),T.registerMarkersIfNecessary(),T.registerVisuallyReadyObserver()}m.M0.sendPageView(null,!1),yield v.wf.renderWidgets(v.wf.getWidgetElements(),{preRenderCallback:S}),e&&e()}catch(F){(0,s.OO)(F,l.VBu,"Error during bingHomepage app initialization.")}finally{(0,y.D)(m.M0.sendAppErrorEvent),(0,C.g)(m.M0.sendAppErrorEvent)}}))},14771:function(t,e,i){function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}i.d(e,{Z:function(){return a}})},17692:function(t,e,i){function a(){return a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},a.apply(this,arguments)}i.d(e,{Z:function(){return a}})},74289:function(t,e,i){i.d(e,{Z:function(){return o}});var a=i(80374);function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,(0,a.Z)(t,e)}},71972:function(t,e,i){function a(t,e){if(null==t)return{};var i,a,o={},n=Object.keys(t);for(a=0;a<n.length;a++)i=n[a],e.indexOf(i)>=0||(o[i]=t[i]);return o}i.d(e,{Z:function(){return a}})},80374:function(t,e,i){function a(t,e){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},a(t,e)}i.d(e,{Z:function(){return a}})},44382:function(t,e,i){i.d(e,{m:function(){return o}});function a(t){const e=t;return void 0!==e.clientValue?e.clientValue:Object.keys(t).reduce(((e,i)=>Object.assign(Object.assign({},e),{[i]:a(t[i])})),{})}class o{constructor(t,e){this.spec=t,this.qspPrefix=e||"rd"}get verParam(){return`${this.qspPrefix}.ver`}get data(){return void 0===this.memo&&(this.memo=a(this.spec.spec)),this.memo}loadQueryParams(t){if(void 0!==this.memo)throw"overwriting existing query string parameters.";const e=t.get([this.qspPrefix,"ver"].join("."));if(e!==this.spec.ver)throw`unmatched spec version: expected "${this.spec.ver}" but got ${e}.`;this.memo={},t.forEach(((t,e)=>{if(!e.startsWith(this.qspPrefix))return;if(e===this.verParam)return;const i=e.split(".").slice(1);let a=this.memo;i.forEach(((e,o)=>{let n={};if(o===i.length-1)try{n=()=>JSON.parse(t)}catch(t){throw this.memo=void 0,t}Object.prototype.hasOwnProperty.call(a,e)||(a[e]=n),"object"!=typeof n||(a=a[e])}))}))}getURLSearchParams(){const t=new URLSearchParams,e=(i,a)=>{Object.keys(i).forEach((o=>{const n=i[o],r=[...a,o];"object"!=typeof n?t.append(r.join("."),JSON.stringify(n())):e(n,r)}))};return e(this.data,[this.qspPrefix]),t.sort(),t.append(this.verParam,this.spec.ver),t}getSerializedData(){return this.getURLSearchParams().toString()}}}},r={};function s(t){var e=r[t];if(void 0!==e)return e.exports;var i=r[t]={id:t,loaded:!1,exports:{}};return n[t].call(i.exports,i,i.exports,s),i.loaded=!0,i.exports}s.m=n,t=[],s.O=function(e,i,a,o){if(!i){var n=1/0;for(c=0;c<t.length;c++){i=t[c][0],a=t[c][1],o=t[c][2];for(var r=!0,l=0;l<i.length;l++)(!1&o||n>=o)&&Object.keys(s.O).every((function(t){return s.O[t](i[l])}))?i.splice(l--,1):(r=!1,o<n&&(n=o));if(r){t.splice(c--,1);var d=a();void 0!==d&&(e=d)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[i,a,o]},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,{a:e}),e},i=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},s.t=function(t,a){if(1&a&&(t=this(t)),8&a)return t;if("object"==typeof t&&t){if(4&a&&t.__esModule)return t;if(16&a&&"function"==typeof t.then)return t}var o=Object.create(null);s.r(o);var n={};e=e||[null,i({}),i([]),i(i)];for(var r=2&a&&t;"object"==typeof r&&!~e.indexOf(r);r=i(r))Object.getOwnPropertyNames(r).forEach((function(e){n[e]=function(){return t[e]}}));return n.default=function(){return t},s.d(o,n),o},s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,i){return s.f[i](t,e),e}),[]))},s.u=function(t){return t+"."+{"card-actions-wc":"c8998eecde3c388b0694","cold-start-wc":"63815fafde4a1afa92b0","esports-card":"5ca6daee3886b5e8b80e","family-card":"a1c69f5ea70101887382","money-info-card-wc":"b8e6c51e10ba4708a023","social-bar-wc":"73969de5271b3c2e3138","sports-card-wc":"6de35cb2d2996e5a8170","sports-olympic-card-wc":"176f9f1242d8cd1f6ac8","tips-card":"2bd0d582248f8e8d7669",toast:"0a9053649ea20d6aa78f","traffic-card-wc":"6a1bfe7f0176edd06051","weather-card":"294d5a7c808d9302a07a","sports-data-service":"87c811f5f827dbb1dea4","topic-data-connector":"7558feee905dd597d91b","weather-card-connector":"3ba20822a32449ab99a0","libs_traffic-chart-utils_dist_index_js":"12bf0722ec19678a678b","node_modules_intersection-observer_intersection-observer_js":"7ed8a4e215d160c64db4","web-components_native-ad-video_dist_index_js":"e078e4c70039bccef25e",nativeadsdecorations:"f84c6c4e487ba0ef5871",nativeadstemplates:"f177ac39fbaa476dc36e","cold-start-gif":"05ea6cc30c2f0977775a","experiences_sports-card-wc_dist_components_sports-hidepopup_index_js":"c3ab106ec1aeac798c2a","experiences_sports-card-wc_dist_components_sports-hidereminder_index_js":"82be6ce1d2073ad900c3","experiences_sports-card-wc_dist_components_sports-feedback_index_js":"844c47ceb1d476045a4a","experiences_sports-card-wc_dist_components_sports-coldstart_index_js":"7bcbdeca453756669015","weather-data-lazy-services":"967091f73b525314afe3","experiences_weather-card-wc_dist_components_weather-hide-dialog_index_js":"2dd7ca9e0dcc69e73067","experiences_weather-card-wc_dist_components_weather-hide-remind_index_js":"5ccab2f390629a0b69a9","experiences_weather-card-wc_dist_components_weather-report-issue_index_js":"9bf9853fcefbdcaf4c90","libs_video-card-plugin-factory_dist_xandr_XandrAdManager_js":"1d2350d0128e607c8742","libs_video-card-plugin-factory_dist_virtualadsplayer_plugin_js":"41b945da07737331246b"}[t]+".js"},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),s.hmd=function(t){return(t=Object.create(t)).children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a={},o="@msnews/msnews-experiences:",s.l=function(t,e,i,n){if(a[t])a[t].push(e);else{var r,l;if(void 0!==i)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var p=d[c];if(p.getAttribute("src")==t||p.getAttribute("data-webpack")==o+i){r=p;break}}r||(l=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.setAttribute("data-webpack",o+i),r.src=t,0!==r.src.indexOf(window.location.origin+"/")&&(r.crossOrigin="anonymous")),a[t]=[e];var g=function(e,i){r.onerror=r.onload=null,clearTimeout(h);var o=a[t];if(delete a[t],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((function(t){return t(i)})),e)return e(i)},h=setTimeout(g.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=g.bind(null,r.onerror),r.onload=g.bind(null,r.onload),l&&document.head.appendChild(r)}},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},s.p="/bundles/v1/bingHomepage/buildNumber/",function(){{const t=s.e,e={};s.e=function(i){return t(i).catch((function(t){const a=e.hasOwnProperty(i)?e[i]:2;if(a<1)throw t;return new Promise((function(t){setTimeout((function(){e[i]=a-1,t(s.e(i))}),100)}))}))}}}(),function(){var t={experience:0};s.f.j=function(e,i){var a=s.o(t,e)?t[e]:void 0;if(0!==a)if(a)i.push(a[2]);else{var o=new Promise((function(i,o){a=t[e]=[i,o]}));i.push(a[2]=o);var n=s.p+s.u(e),r=new Error;s.l(n,(function(i){if(s.o(t,e)&&(0!==(a=t[e])&&(t[e]=void 0),a)){var o=i&&("load"===i.type?"missing":i.type),n=i&&i.target&&i.target.src;r.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",r.name="ChunkLoadError",r.type=o,r.request=n,a[1](r)}}),"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,o,n=i[0],r=i[1],l=i[2],d=0;if(n.some((function(e){return 0!==t[e]}))){for(a in r)s.o(r,a)&&(s.m[a]=r[a]);if(l)var c=l(s)}for(e&&e(i);d<n.length;d++)o=n[d],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(c)},i=self.webpackChunk_msnews_msnews_experiences=self.webpackChunk_msnews_msnews_experiences||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var l=s.O(void 0,["common","vendors","microsoft"],(function(){return s(26382)}));l=s.O(l)}();