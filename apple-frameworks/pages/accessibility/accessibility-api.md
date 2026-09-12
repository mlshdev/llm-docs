> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/accessibility-api](https://developer.apple.com/documentation/accessibility/accessibility-api)

# Accessibility API (Swift)

**Framework:** Accessibility  
**Kind:** API Collection

Browse API in the Accessibility framework.

<a id="Overview"></a>

## Overview

While many Apple frameworks provide built-in accessibility support, the Accessibility framework defines API for supporting additional accessibility features across multiple platforms. The Accessibility framework includes API that enable you to:

- Respond to changes in Accessibility system settings
- Post accessibility notifications
- Define an accessible representation of your chart to support audio graphs
- Interact with hardware such as braille displays and hearing devices
- Generate a localized description of a color

## Topics

### System settings

- [AccessibilitySettings](accessibilitysettings.md): A structure for working with accessibility system settings.

### Notifications

- [AccessibilityNotification](accessibilitynotification.md): Types of accessibility notifications that an app can post.

### Assistive technologies

- [AccessibilityTechnology](accessibilitytechnology.md)
- [automation](accessibilitytechnology/automation.md)
- [fullKeyboardAccess](accessibilitytechnology/fullkeyboardaccess.md)
- [hoverText](accessibilitytechnology/hovertext.md)
- [speakScreen](accessibilitytechnology/speakscreen.md)
- [switchControl](accessibilitytechnology/switchcontrol.md)
- [voiceControl](accessibilitytechnology/voicecontrol.md)
- [voiceOver](accessibilitytechnology/voiceover.md)
- [zoom](accessibilitytechnology/zoom.md)
- [AccessibilityRequest](accessibilityrequest.md)

### Features

- [Customized accessibility content](customized-accessibility-content.md): Customize your apps to deliver accessibility information to your users in measured portions as they need it.
- [Audio graphs](audio-graphs.md): Define an accessible representation of your chart for VoiceOver to generate an audio graph.
- [Hearing device support](hearing-device-support.md): Access information about paired hearing aid devices and streaming status.
- [AXNameFromColor(\_:)](axnamefromcolor%28__%29.md): Returns a localized description of the color to use in accessibility attributes.

### Braille

- [Braille displays](braille-displays.md): Display a graphical representation of images, icons, data, and more on a two-dimensional braille display.
- [AXBrailleTable](axbrailletable.md): A rule for translating print text to Braille, and back-translating Braille to print text.
- [AXBrailleTranslator](axbrailletranslator.md): Translates print text to Braille and Braille to print text according to the given Braille table.
- [AXBrailleTranslationResult](axbrailletranslationresult.md): The result of translation or back-translation.

### Math expressions

- [AXMathExpressionNumber](axmathexpressionnumber.md)
- [AXMathExpressionIdentifier](axmathexpressionidentifier.md)
- [AXMathExpressionOperator](axmathexpressionoperator.md)
- [AXMathExpressionText](axmathexpressiontext.md)
- [AXMathExpressionFenced](axmathexpressionfenced.md)
- [AXMathExpressionRow](axmathexpressionrow.md)
- [AXMathExpressionTable](axmathexpressiontable.md)
- [AXMathExpressionTableCell](axmathexpressiontablecell.md)
- [AXMathExpressionTableRow](axmathexpressiontablerow.md)
- [AXMathExpressionUnderOver](axmathexpressionunderover.md)
- [AXMathExpressionSubSuperscript](axmathexpressionsubsuperscript.md)
- [AXMathExpressionFraction](axmathexpressionfraction.md)
- [AXMathExpressionMultiscript](axmathexpressionmultiscript.md)
- [AXMathExpressionRoot](axmathexpressionroot.md)
- [AXMathExpression](axmathexpression.md)
- [AXMathExpressionProvider](axmathexpressionprovider.md)

### Override sessions

- [AXFeatureOverrideSession](axfeatureoverridesession.md): A token object that represents an override session held by your app.
- [AXFeatureOverrideSessionManager](axfeatureoverridesessionmanager.md): A manager class to begin and end accessibility feature override sessions. Multiple override sessions are reconciled by combining the requests, preferring feature enablement. Ending all sessions restores the prior state of Accessibility feature enablement. Your app must be entitled with com.apple.developer.accessibility.merchant-api-control.
- [AXFeatureOverrideSession.Options](axfeatureoverridesession/options.md): Options indicating which Accessibility features will be turned on or off when an override session is held by your app.
- [AXFeatureOverrideSessionErrorDomain](axfeatureoverridesessionerrordomain.md)
- [AXFeatureOverrideSessionError](axfeatureoverridesessionerror-swift.struct.md)
- [AXFeatureOverrideSessionError.Code](axfeatureoverridesessionerror-swift.struct/code.md)
- [com.apple.developer.accessibility.merchant-api-control](../bundleresources/entitlements/com.apple.developer.accessibility.merchant-api-control.md)

### Deprecated

- [AXAnimatedImagesEnabled()](axanimatedimagesenabled%28%29.md): Deprecated. Returns a Boolean value that indicates whether the system setting for Animated Images is on.
- [AXPrefersHeadAnchorAlternative()](axprefersheadanchoralternative%28%29.md): Deprecated. Returns a Boolean value that indicates the person’s preference for content that follows their head position.
- [AXPrefersHorizontalTextLayout()](axprefershorizontaltextlayout%28%29.md): Deprecated. Returns a Boolean value that indicates whether the system setting for Prefer Horizontal Text is on.

# Accessibility API (Objective-C)

**Framework:** Accessibility  
**Kind:** API Collection

Browse API in the Accessibility framework.

<a id="Overview"></a>

## Overview

While many Apple frameworks provide built-in accessibility support, the Accessibility framework defines API for supporting additional accessibility features across multiple platforms. The Accessibility framework includes API that enable you to:

- Respond to changes in Accessibility system settings
- Post accessibility notifications
- Define an accessible representation of your chart to support audio graphs
- Interact with hardware such as braille displays and hearing devices
- Generate a localized description of a color

## Topics

### System settings

- [AXOpenSettingsFeature](axopensettingsfeature.md)
- [AXAnimatedImagesEnabled](axanimatedimagesenabled.md)
- [AXAnimatedImagesEnabledDidChangeNotification](axanimatedimagesenableddidchangenotification.md)
- [AXPrefersHorizontalTextLayout](axprefershorizontaltextlayout.md)
- [AXPrefersHorizontalTextLayoutDidChangeNotification](axprefershorizontaltextlayoutdidchangenotification.md)
- [AXPrefersHeadAnchorAlternative](axprefersheadanchoralternative.md)
- [AXPrefersHeadAnchorAlternativeDidChangeNotification](axprefersheadanchoralternativedidchangenotification.md)
- [AXPrefersNonBlinkingTextInsertionIndicator](axprefersnonblinkingtextinsertionindicator.md)

### Assistive technologies

- [AXTechnology](accessibilitytechnology.md)
- [AXTechnologyAutomation](accessibilitytechnology/automation.md)
- [AXTechnologyFullKeyboardAccess](accessibilitytechnology/fullkeyboardaccess.md)
- [AXTechnologyHoverText](accessibilitytechnology/hovertext.md)
- [AXTechnologySpeakScreen](accessibilitytechnology/speakscreen.md)
- [AXTechnologySwitchControl](accessibilitytechnology/switchcontrol.md)
- [AXTechnologyVoiceControl](accessibilitytechnology/voicecontrol.md)
- [AXTechnologyVoiceOver](accessibilitytechnology/voiceover.md)
- [AXTechnologyZoom](accessibilitytechnology/zoom.md)
- [AXRequest](accessibilityrequest.md)

### Features

- [Customized accessibility content](customized-accessibility-content.md): Customize your apps to deliver accessibility information to your users in measured portions as they need it.
- [Audio graphs](audio-graphs.md): Define an accessible representation of your chart for VoiceOver to generate an audio graph.
- [Hearing device support](hearing-device-support.md): Access information about paired hearing aid devices and streaming status.
- [AXNameFromColor](axnamefromcolor%28__%29.md): Returns a localized description of the color to use in accessibility attributes.

### Braille

- [Braille displays](braille-displays.md): Display a graphical representation of images, icons, data, and more on a two-dimensional braille display.
- [AXBrailleTable](axbrailletable.md): A rule for translating print text to Braille, and back-translating Braille to print text.
- [AXBrailleTranslator](axbrailletranslator.md): Translates print text to Braille and Braille to print text according to the given Braille table.
- [AXBrailleTranslationResult](axbrailletranslationresult.md): The result of translation or back-translation.

### Math expressions

- [AXMathExpressionNumber](axmathexpressionnumber.md)
- [AXMathExpressionIdentifier](axmathexpressionidentifier.md)
- [AXMathExpressionOperator](axmathexpressionoperator.md)
- [AXMathExpressionText](axmathexpressiontext.md)
- [AXMathExpressionFenced](axmathexpressionfenced.md)
- [AXMathExpressionRow](axmathexpressionrow.md)
- [AXMathExpressionTable](axmathexpressiontable.md)
- [AXMathExpressionTableCell](axmathexpressiontablecell.md)
- [AXMathExpressionTableRow](axmathexpressiontablerow.md)
- [AXMathExpressionUnderOver](axmathexpressionunderover.md)
- [AXMathExpressionSubSuperscript](axmathexpressionsubsuperscript.md)
- [AXMathExpressionFraction](axmathexpressionfraction.md)
- [AXMathExpressionMultiscript](axmathexpressionmultiscript.md)
- [AXMathExpressionRoot](axmathexpressionroot.md)
- [AXMathExpression](axmathexpression.md)
- [AXMathExpressionProvider](axmathexpressionprovider.md)

### Override sessions

- [AXFeatureOverrideSession](axfeatureoverridesession.md): A token object that represents an override session held by your app.
- [AXFeatureOverrideSessionManager](axfeatureoverridesessionmanager.md): A manager class to begin and end accessibility feature override sessions. Multiple override sessions are reconciled by combining the requests, preferring feature enablement. Ending all sessions restores the prior state of Accessibility feature enablement. Your app must be entitled with com.apple.developer.accessibility.merchant-api-control.
- [AXFeatureOverrideSessionOptions](axfeatureoverridesession/options.md): Options indicating which Accessibility features will be turned on or off when an override session is held by your app.
- [AXFeatureOverrideSessionErrorDomain](axfeatureoverridesessionerrordomain.md)
- [AXFeatureOverrideSessionError](axfeatureoverridesessionerror-swift.struct/code.md)
- [com.apple.developer.accessibility.merchant-api-control](../bundleresources/entitlements/com.apple.developer.accessibility.merchant-api-control.md)
