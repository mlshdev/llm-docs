> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration)

# AEAssessmentConfiguration (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 10.15.4+

Configuration information for an assessment session.

## Declaration

```swift
class AEAssessmentConfiguration
```

<a id="overview"></a>

## Overview

Create a configuration instance and pass it to the [init(configuration:)](aeassessmentsession/init%28configuration_%29.md) initializer of an [AEAssessmentSession](aeassessmentsession.md) instance to create a new assessment session. Before using the configuration, indicate which exceptions you want to allow for the assessment session’s restrictions by setting values on the configuration instance. For example, you can set values to allow dictation and certain aspects of autocorrect:

**Swift**

```swift
let config = AEAssessmentConfiguration()

#if os(iOS) // These exceptions available only on iOS and iPadOS.
config.allowsDictation = true
config.autocorrectMode = [.punctuation, .spelling]
#endif

let session = AEAssessmentSession(configuration: config)
```

**Objective-C**

```objc
AEAssessmentConfiguration *config = [AEAssessmentConfiguration new];

#if TARGET_OS_IPHONE || TARGET_IPHONE_SIMULATOR // These exceptions available only on iOS and iPadOS.
config.allowsDictation = YES;
config.autocorrectMode = AEAutocorrectModePunctuation | AEAutocorrectModeSpelling;
#endif

AEAssessmentSession *session = [[AEAssessmentSession alloc] initWithConfiguration:config];
```

While you provide a configuration instance when creating a session on iOS, iPadOS, and macOS, specific exceptions apply only to certain platforms. In particular, on macOS, you can selectively make specific apps besides your own available during an assessment — for example, to allow users to access a calculator or a dictionary. All other exceptions apply only to iOS and iPadOS.

## Topics

### Allowing access to other apps

- [configurationsByApplication](aeassessmentconfiguration/configurationsbyapplication.md): The collection of apps available during an assessment, along with their associated configurations.
- [mainParticipantConfiguration](aeassessmentconfiguration/mainparticipantconfiguration.md): The app-specific configuration for the app that invokes the assessment.
- [AEAssessmentApplication](aeassessmentapplication.md): A representation of an app that users can access during an assessment.
- [AEAssessmentParticipantConfiguration](aeassessmentparticipantconfiguration.md): Configuration information for an app that’s available during an assessment.

### Allowing accessibility

- [allowsAccessibilitySpeech](aeassessmentconfiguration/allowsaccessibilityspeech.md): Deprecated. A Boolean value that indicates whether to allow the speech-related accessibility features during an assessment.
- [allowsDictation](aeassessmentconfiguration/allowsdictation.md): A Boolean value that indicates whether to allow the use of dictation during an assessment.

### Allowing typing assistance

- [allowsContinuousPathKeyboard](aeassessmentconfiguration/allowscontinuouspathkeyboard.md): A Boolean value that indicates whether to allow Slide to Type to operate during an assessment.
- [allowsKeyboardShortcuts](aeassessmentconfiguration/allowskeyboardshortcuts.md): A Boolean value that indicates whether to allow keyboard shortcuts during an assessment.
- [allowsPredictiveKeyboard](aeassessmentconfiguration/allowspredictivekeyboard.md): A Boolean value that indicates whether to enable the predictive keyboard during an assessment.
- [allowsPasswordAutoFill](aeassessmentconfiguration/allowspasswordautofill.md): A Boolean value that indicates whether to allow password autofill during an assessment.

### Allowing corrections

- [allowsSpellCheck](aeassessmentconfiguration/allowsspellcheck.md): A Boolean value that indicates whether to allow spell check during an assessment.
- [autocorrectMode](aeassessmentconfiguration/autocorrectmode-swift.property.md): A Boolean value that indicates whether to allow Autocorrect during an assessment.
- [AEAssessmentConfiguration.AutocorrectMode](aeassessmentconfiguration/autocorrectmode-swift.struct.md): The set of autocorrect features that you can enable during an assessment.

### Allowing handoff

- [allowsActivityContinuation](aeassessmentconfiguration/allowsactivitycontinuation.md): A Boolean value that indicates whether to allow Handoff during an assessment.

### Instance Properties

- [allowedAppleMenuItems](aeassessmentconfiguration/allowedapplemenuitems.md): The set of allowed Apple menu items during an assessment.
- [allowedDirectoriesAndFiles](aeassessmentconfiguration/alloweddirectoriesandfiles.md): The set of directories and files that remain visible in the Finder during an assessment.
- [allowedMenuBarItems](aeassessmentconfiguration/allowedmenubaritems.md): The set of menu bar items that should remain visible during an assessment.
- [allowsAccessibilityAlternativeInputMethods](aeassessmentconfiguration/allowsaccessibilityalternativeinputmethods.md): A Boolean value that indicates whether to allow alternative input methods for accessibility features during an assessment.
- [allowsAccessibilityBackgroundSounds](aeassessmentconfiguration/allowsaccessibilitybackgroundsounds.md): A Boolean value that indicates whether to allow Background Sounds during an assessment.
- [allowsAccessibilityFullKeyboardAccess](aeassessmentconfiguration/allowsaccessibilityfullkeyboardaccess.md): A Boolean value that indicates whether to allow Full Keyboard Access during an assessment.
- [allowsAccessibilityHoverText](aeassessmentconfiguration/allowsaccessibilityhovertext.md): A Boolean value that indicates whether to allow Hover Text during an assessment.
- [allowsAccessibilityKeyboard](aeassessmentconfiguration/allowsaccessibilitykeyboard.md): A Boolean value that indicates whether to allow the Accessibility Keyboard during an assessment.
- [allowsAccessibilityLiveCaptions](aeassessmentconfiguration/allowsaccessibilitylivecaptions.md): A Boolean value that indicates whether to allow Live Captions during an assessment.
- [allowsAccessibilityLiveSpeech](aeassessmentconfiguration/allowsaccessibilitylivespeech.md): A Boolean value that indicates whether to allow Live Speech during an assessment.
- [allowsAccessibilityReader](aeassessmentconfiguration/allowsaccessibilityreader.md): A Boolean value that indicates whether to allow the Accessibility Reader during an assessment.
- [allowsAccessibilitySpokenContent](aeassessmentconfiguration/allowsaccessibilityspokencontent.md): A Boolean value that indicates whether to allow Spoken Content during an assessment.
- [allowsAccessibilitySwitchControl](aeassessmentconfiguration/allowsaccessibilityswitchcontrol.md): A Boolean value that indicates whether to allow Switch Control during an assessment.
- [allowsAccessibilityTypingFeedback](aeassessmentconfiguration/allowsaccessibilitytypingfeedback.md): A Boolean value that indicates whether to allow accessibility typing feedback during an assessment.
- [allowsAccessibilityVoiceControl](aeassessmentconfiguration/allowsaccessibilityvoicecontrol.md): A Boolean value that indicates whether to allow Voice Control during an assessment.
- [allowsAccessibilityVoiceOver](aeassessmentconfiguration/allowsaccessibilityvoiceover.md): A Boolean value that indicates whether to allow VoiceOver during an assessment.
- [allowsAccessibilityZoom](aeassessmentconfiguration/allowsaccessibilityzoom.md): A Boolean value that indicates whether to allow Zoom during an assessment.
- [allowsAutoFill](aeassessmentconfiguration/allowsautofill.md): A Boolean value that indicates whether to allow autofill during an assessment.
- [allowsDock](aeassessmentconfiguration/allowsdock.md): A Boolean value that indicates whether to allow the Dock during an assessment.
- [allowsEmojiKeyboard](aeassessmentconfiguration/allowsemojikeyboard.md): A Boolean value that indicates whether to allow the emoji keyboard during an assessment.
- [allowsForceQuitKeyboardShortcuts](aeassessmentconfiguration/allowsforcequitkeyboardshortcuts.md): A Boolean value that indicates whether to allow force quitting apps during an assessment.
- [allowsLockdownMode](aeassessmentconfiguration/allowslockdownmode.md): A Boolean value that indicates whether the assessment allows Lockdown Mode to be active.
- [allowsMenuBar](aeassessmentconfiguration/allowsmenubar.md): A Boolean value that indicates whether to allow the menu bar during an assessment.
- [allowsOnlyParticipantsToRun](aeassessmentconfiguration/allowsonlyparticipantstorun.md): A Boolean value that indicates whether only participant applications are allowed to run during an assessment.
- [allowsPrivateRelay](aeassessmentconfiguration/allowsprivaterelay.md): A Boolean value that indicates whether the assessment allows iCloud Private Relay to be active.
- [allowsScreenshots](aeassessmentconfiguration/allowsscreenshots.md): A Boolean value that indicates whether to allow screenshots copied to the clipboard during an assessment.
- [allowsStructuralInput](aeassessmentconfiguration/allowsstructuralinput.md): A Boolean value that indicates whether to allow Chinese and Japanese structural input during an assessment.
- [allowsUserScriptExecution](aeassessmentconfiguration/allowsuserscriptexecution.md): A Boolean value that indicates whether to allow user script execution during an assessment.
- [allowsVirtualMachine](aeassessmentconfiguration/allowsvirtualmachine.md): A Boolean value that indicates whether the assessment allows running inside a virtual machine.
- [configurationsByBinaryExecutable](aeassessmentconfiguration/configurationsbybinaryexecutable.md): The collection of executable participants available during an assessment, along with their associated configurations.
- [requiresManagedDevice](aeassessmentconfiguration/requiresmanageddevice.md): A Boolean value that indicates whether the device must be managed to start an assessment.
- [requiresReleaseOS](aeassessmentconfiguration/requiresreleaseos.md): A Boolean value that indicates whether the device must be running a final customer release of the operating system to start an assessment.
- [requiresSIP](aeassessmentconfiguration/requiressip.md): A Boolean value that indicates whether System Integrity Protection (SIP) must be enabled to start an assessment.
- [requiresSingleUser](aeassessmentconfiguration/requiressingleuser.md): A Boolean value that indicates whether only a single user account must be logged in to start an assessment.
- [requiresUserAccountType](aeassessmentconfiguration/requiresuseraccounttype.md): Specifies the type of user account required to start an assessment.

### Instance Methods

- [remove(\_:)](aeassessmentconfiguration/remove%28__%29-313bq.md): Removes the availability of a previously allowed app.
- [remove(\_:)](aeassessmentconfiguration/remove%28__%29-9pylg.md): Removes the availability of a previously added executable participant.
- [setConfiguration(\_:for:)](aeassessmentconfiguration/setconfiguration%28__for_%29-16sed.md): Adds an executable participant to the list of participants available during an assessment.
- [setConfiguration(\_:for:)](aeassessmentconfiguration/setconfiguration%28__for_%29-2tjgb.md): Adds an app to the list of apps available during an assessment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Sessions

- [Preparing an educational assessment app for distribution](preparing-an-educational-assessment-app-for-distribution.md): Ensure your app maintains academic integrity by reviewing assessment practices and managing system capabilities.
- [Build an Educational Assessment App](build-an-educational-assessment-app.md): Ensure the academic integrity of your assessment app by using Automatic Assessment Configuration.
- [AEAssessmentSession](aeassessmentsession.md): A session that your app uses to protect an assessment.

# AEAssessmentConfiguration (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 14.0+ · macOS 10.15.4+

Configuration information for an assessment session.

## Declaration

```objectivec
@interface AEAssessmentConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Create a configuration instance and pass it to the [initWithConfiguration:](aeassessmentsession/init%28configuration_%29.md) initializer of an [AEAssessmentSession](aeassessmentsession.md) instance to create a new assessment session. Before using the configuration, indicate which exceptions you want to allow for the assessment session’s restrictions by setting values on the configuration instance. For example, you can set values to allow dictation and certain aspects of autocorrect:

**Swift**

```swift
let config = AEAssessmentConfiguration()

#if os(iOS) // These exceptions available only on iOS and iPadOS.
config.allowsDictation = true
config.autocorrectMode = [.punctuation, .spelling]
#endif

let session = AEAssessmentSession(configuration: config)
```

**Objective-C**

```objc
AEAssessmentConfiguration *config = [AEAssessmentConfiguration new];

#if TARGET_OS_IPHONE || TARGET_IPHONE_SIMULATOR // These exceptions available only on iOS and iPadOS.
config.allowsDictation = YES;
config.autocorrectMode = AEAutocorrectModePunctuation | AEAutocorrectModeSpelling;
#endif

AEAssessmentSession *session = [[AEAssessmentSession alloc] initWithConfiguration:config];
```

While you provide a configuration instance when creating a session on iOS, iPadOS, and macOS, specific exceptions apply only to certain platforms. In particular, on macOS, you can selectively make specific apps besides your own available during an assessment — for example, to allow users to access a calculator or a dictionary. All other exceptions apply only to iOS and iPadOS.

## Topics

### Allowing access to other apps

- [configurationsByApplication](aeassessmentconfiguration/configurationsbyapplication.md): The collection of apps available during an assessment, along with their associated configurations.
- [mainParticipantConfiguration](aeassessmentconfiguration/mainparticipantconfiguration.md): The app-specific configuration for the app that invokes the assessment.
- [AEAssessmentApplication](aeassessmentapplication.md): A representation of an app that users can access during an assessment.
- [AEAssessmentParticipantConfiguration](aeassessmentparticipantconfiguration.md): Configuration information for an app that’s available during an assessment.

### Allowing accessibility

- [allowsAccessibilitySpeech](aeassessmentconfiguration/allowsaccessibilityspeech.md): Deprecated. A Boolean value that indicates whether to allow the speech-related accessibility features during an assessment.
- [allowsDictation](aeassessmentconfiguration/allowsdictation.md): A Boolean value that indicates whether to allow the use of dictation during an assessment.

### Allowing typing assistance

- [allowsContinuousPathKeyboard](aeassessmentconfiguration/allowscontinuouspathkeyboard.md): A Boolean value that indicates whether to allow Slide to Type to operate during an assessment.
- [allowsKeyboardShortcuts](aeassessmentconfiguration/allowskeyboardshortcuts.md): A Boolean value that indicates whether to allow keyboard shortcuts during an assessment.
- [allowsPredictiveKeyboard](aeassessmentconfiguration/allowspredictivekeyboard.md): A Boolean value that indicates whether to enable the predictive keyboard during an assessment.
- [allowsPasswordAutoFill](aeassessmentconfiguration/allowspasswordautofill.md): A Boolean value that indicates whether to allow password autofill during an assessment.

### Allowing corrections

- [allowsSpellCheck](aeassessmentconfiguration/allowsspellcheck.md): A Boolean value that indicates whether to allow spell check during an assessment.
- [autocorrectMode](aeassessmentconfiguration/autocorrectmode-swift.property.md): A Boolean value that indicates whether to allow Autocorrect during an assessment.
- [AEAutocorrectMode](aeassessmentconfiguration/autocorrectmode-swift.struct.md): The set of autocorrect features that you can enable during an assessment.

### Allowing handoff

- [allowsActivityContinuation](aeassessmentconfiguration/allowsactivitycontinuation.md): A Boolean value that indicates whether to allow Handoff during an assessment.

### Instance Properties

- [allowLockdownMode](aeassessmentconfiguration/allowlockdownmode.md): A Boolean value that indicates whether the assessment allows Lockdown Mode to be active.
- [allowOnlyParticipantsToRun](aeassessmentconfiguration/allowonlyparticipantstorun.md): A Boolean value that indicates whether only participant applications are allowed to run during an assessment.
- [allowPrivateRelay](aeassessmentconfiguration/allowprivaterelay.md): A Boolean value that indicates whether the assessment allows iCloud Private Relay to be active.
- [allowVirtualMachine](aeassessmentconfiguration/allowvirtualmachine.md): A Boolean value that indicates whether the assessment allows running inside a virtual machine.
- [allowedAppleMenuItems](aeassessmentconfiguration/allowedapplemenuitems.md): The set of allowed Apple menu items during an assessment.
- [allowedDirectoriesAndFiles](aeassessmentconfiguration/alloweddirectoriesandfiles.md): The set of directories and files that remain visible in the Finder during an assessment.
- [allowedMenuBarItems](aeassessmentconfiguration/allowedmenubaritems.md): The set of menu bar items that should remain visible during an assessment.
- [allowsAccessibilityAlternativeInputMethods](aeassessmentconfiguration/allowsaccessibilityalternativeinputmethods.md): A Boolean value that indicates whether to allow alternative input methods for accessibility features during an assessment.
- [allowsAccessibilityBackgroundSounds](aeassessmentconfiguration/allowsaccessibilitybackgroundsounds.md): A Boolean value that indicates whether to allow Background Sounds during an assessment.
- [allowsAccessibilityFullKeyboardAccess](aeassessmentconfiguration/allowsaccessibilityfullkeyboardaccess.md): A Boolean value that indicates whether to allow Full Keyboard Access during an assessment.
- [allowsAccessibilityHoverText](aeassessmentconfiguration/allowsaccessibilityhovertext.md): A Boolean value that indicates whether to allow Hover Text during an assessment.
- [allowsAccessibilityKeyboard](aeassessmentconfiguration/allowsaccessibilitykeyboard.md): A Boolean value that indicates whether to allow the Accessibility Keyboard during an assessment.
- [allowsAccessibilityLiveCaptions](aeassessmentconfiguration/allowsaccessibilitylivecaptions.md): A Boolean value that indicates whether to allow Live Captions during an assessment.
- [allowsAccessibilityLiveSpeech](aeassessmentconfiguration/allowsaccessibilitylivespeech.md): A Boolean value that indicates whether to allow Live Speech during an assessment.
- [allowsAccessibilityReader](aeassessmentconfiguration/allowsaccessibilityreader.md): A Boolean value that indicates whether to allow the Accessibility Reader during an assessment.
- [allowsAccessibilitySpokenContent](aeassessmentconfiguration/allowsaccessibilityspokencontent.md): A Boolean value that indicates whether to allow Spoken Content during an assessment.
- [allowsAccessibilitySwitchControl](aeassessmentconfiguration/allowsaccessibilityswitchcontrol.md): A Boolean value that indicates whether to allow Switch Control during an assessment.
- [allowsAccessibilityTypingFeedback](aeassessmentconfiguration/allowsaccessibilitytypingfeedback.md): A Boolean value that indicates whether to allow accessibility typing feedback during an assessment.
- [allowsAccessibilityVoiceControl](aeassessmentconfiguration/allowsaccessibilityvoicecontrol.md): A Boolean value that indicates whether to allow Voice Control during an assessment.
- [allowsAccessibilityVoiceOver](aeassessmentconfiguration/allowsaccessibilityvoiceover.md): A Boolean value that indicates whether to allow VoiceOver during an assessment.
- [allowsAccessibilityZoom](aeassessmentconfiguration/allowsaccessibilityzoom.md): A Boolean value that indicates whether to allow Zoom during an assessment.
- [allowsAutoFill](aeassessmentconfiguration/allowsautofill.md): A Boolean value that indicates whether to allow autofill during an assessment.
- [allowsDock](aeassessmentconfiguration/allowsdock.md): A Boolean value that indicates whether to allow the Dock during an assessment.
- [allowsEmojiKeyboard](aeassessmentconfiguration/allowsemojikeyboard.md): A Boolean value that indicates whether to allow the emoji keyboard during an assessment.
- [allowsForceQuit](aeassessmentconfiguration/allowsforcequit.md): A Boolean value that indicates whether to allow force quitting apps during an assessment.
- [allowsForceQuitKeyboardShortcuts](aeassessmentconfiguration/allowsforcequitkeyboardshortcuts.md): A Boolean value that indicates whether to allow force quitting apps during an assessment.
- [allowsLockdownMode](aeassessmentconfiguration/allowslockdownmode.md): A Boolean value that indicates whether the assessment allows Lockdown Mode to be active.
- [allowsMenuBar](aeassessmentconfiguration/allowsmenubar.md): A Boolean value that indicates whether to allow the menu bar during an assessment.
- [allowsOnlyParticipantsToRun](aeassessmentconfiguration/allowsonlyparticipantstorun.md): A Boolean value that indicates whether only participant applications are allowed to run during an assessment.
- [allowsPrivateRelay](aeassessmentconfiguration/allowsprivaterelay.md): A Boolean value that indicates whether the assessment allows iCloud Private Relay to be active.
- [allowsScreenshots](aeassessmentconfiguration/allowsscreenshots.md): A Boolean value that indicates whether to allow screenshots copied to the clipboard during an assessment.
- [allowsStructuralInput](aeassessmentconfiguration/allowsstructuralinput.md): A Boolean value that indicates whether to allow Chinese and Japanese structural input during an assessment.
- [allowsUserScriptExecution](aeassessmentconfiguration/allowsuserscriptexecution.md): A Boolean value that indicates whether to allow user script execution during an assessment.
- [allowsVirtualMachine](aeassessmentconfiguration/allowsvirtualmachine.md): A Boolean value that indicates whether the assessment allows running inside a virtual machine.
- [configurationsByBinaryExecutable](aeassessmentconfiguration/configurationsbybinaryexecutable.md): The collection of executable participants available during an assessment, along with their associated configurations.
- [requiresManagedDevice](aeassessmentconfiguration/requiresmanageddevice.md): A Boolean value that indicates whether the device must be managed to start an assessment.
- [requiresReleaseOS](aeassessmentconfiguration/requiresreleaseos.md): A Boolean value that indicates whether the device must be running a final customer release of the operating system to start an assessment.
- [requiresSIP](aeassessmentconfiguration/requiressip.md): A Boolean value that indicates whether System Integrity Protection (SIP) must be enabled to start an assessment.
- [requiresSingleUser](aeassessmentconfiguration/requiressingleuser.md): A Boolean value that indicates whether only a single user account must be logged in to start an assessment.
- [requiresUserAccountType](aeassessmentconfiguration/requiresuseraccounttype.md): Specifies the type of user account required to start an assessment.

### Instance Methods

- [removeApplication:](aeassessmentconfiguration/remove%28__%29-313bq.md): Removes the availability of a previously allowed app.
- [removeBinaryExecutable:](aeassessmentconfiguration/remove%28__%29-9pylg.md): Removes the availability of a previously added executable participant.
- [setConfiguration:forBinaryExecutable:](aeassessmentconfiguration/setconfiguration%28__for_%29-16sed.md): Adds an executable participant to the list of participants available during an assessment.
- [setConfiguration:forApplication:](aeassessmentconfiguration/setconfiguration%28__for_%29-2tjgb.md): Adds an app to the list of apps available during an assessment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Sessions

- [Preparing an educational assessment app for distribution](preparing-an-educational-assessment-app-for-distribution.md): Ensure your app maintains academic integrity by reviewing assessment practices and managing system capabilities.
- [Build an Educational Assessment App](build-an-educational-assessment-app.md): Ensure the academic integrity of your assessment app by using Automatic Assessment Configuration.
- [AEAssessmentSession](aeassessmentsession.md): A session that your app uses to protect an assessment.
