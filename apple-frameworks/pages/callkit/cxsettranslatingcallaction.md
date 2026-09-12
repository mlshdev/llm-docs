> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxsettranslatingcallaction](https://developer.apple.com/documentation/callkit/cxsettranslatingcallaction)

# CXSetTranslatingCallAction (Swift)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An encapsulation of the act of translating a call.

## Declaration

```swift
class CXSetTranslatingCallAction
```

<a id="overview"></a>

## Overview

[CXSetTranslatingCallAction](cxsettranslatingcallaction.md) is a concrete subclass of [CXCallAction](cxcallaction.md). When a caller chooses to translate a conversation, the system provides translated captions, and a translated transcript of the call and the [CXProvider](cxprovider.md) sends the [provider(\_:perform:)](cxproviderdelegate/provider%28__perform_%29-43atg.md) to its delegate. The provider’s delegate calls the [fulfill()](cxaction/fulfill%28%29.md) method to indicate that the action was successfully performed.

> **Important**

> To avoid interrupting or impeding call translation when a person mutes their audio during a conversation, don’t deactivate the upstream audio. Instead, mute your app’s audio input using [CXSetMutedCallAction](cxsetmutedcallaction.md) and keep the upstream audio active to allow translated audio to flow when a person mutes the hardware microphone.

## Topics

### Creating New Actions

- [init(coder:)](cxsettranslatingcallaction/init%28coder_%29.md): Creates a new action to start or stop translating a call with the provided data.

### Accessing Action Attributes

- [isTranslating](cxsettranslatingcallaction/istranslating.md): A value that indicates whether translation is active for a call.

### Completing Actions

- [CXTranslationEngine](cxtranslationengine.md): Values that describe the translation engine that provided a translation.

### Initializers

- [init(call:isTranslating:localLanguage:remoteLanguage:)](cxsettranslatingcallaction/init%28call_istranslating_locallanguage_remotelanguage_%29.md)
- [init(callUUID:isTranslating:localLanguage:remoteLanguage:)](cxsettranslatingcallaction/init%28calluuid_istranslating_locallanguage_remotelanguage_%29.md)

### Instance Properties

- [localLanguage](cxsettranslatingcallaction/locallanguage.md)
- [remoteLanguage](cxsettranslatingcallaction/remotelanguage.md)

### Instance Methods

- [fulfill(using:)](cxsettranslatingcallaction/fulfill%28using_%29.md)

## Relationships

### Inherits From

- [CXCallAction](cxcallaction.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Call-related actions

- [CXAction](cxaction.md): An abstract class that declares a programmatic interface for objects that represent a telephony action.
- [CXCallAction](cxcallaction.md): A programmatic interface for objects that represent a telephony action associated with a call object.
- [CXEndCallAction](cxendcallaction.md): An encapsulation of the act of ending a call.
- [CXPlayDTMFCallAction](cxplaydtmfcallaction.md): An encapsulation of the act of playing a dual tone multifrequency (DTMF) sequence.
- [CXSetGroupCallAction](cxsetgroupcallaction.md): An encapsulation of the act of grouping or ungrouping calls.
- [CXSetHeldCallAction](cxsetheldcallaction.md): An encapsulation of the act of placing a call on hold or removing a call from hold.
- [CXSetMutedCallAction](cxsetmutedcallaction.md): An encapsulation of the act of muting or unmuting a call.

# CXSetTranslatingCallAction (Objective-C)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An encapsulation of the act of translating a call.

## Declaration

```objectivec
@interface CXSetTranslatingCallAction : CXCallAction
```

<a id="overview"></a>

## Overview

[CXSetTranslatingCallAction](cxsettranslatingcallaction.md) is a concrete subclass of [CXCallAction](cxcallaction.md). When a caller chooses to translate a conversation, the system provides translated captions, and a translated transcript of the call and the [CXProvider](cxprovider.md) sends the [provider:performSetTranslatingCallAction:](cxproviderdelegate/provider%28__perform_%29-43atg.md) to its delegate. The provider’s delegate calls the [fulfill](cxaction/fulfill%28%29.md) method to indicate that the action was successfully performed.

> **Important**

> To avoid interrupting or impeding call translation when a person mutes their audio during a conversation, don’t deactivate the upstream audio. Instead, mute your app’s audio input using [CXSetMutedCallAction](cxsetmutedcallaction.md) and keep the upstream audio active to allow translated audio to flow when a person mutes the hardware microphone.

## Topics

### Creating New Actions

- [initWithCoder:](cxsettranslatingcallaction/init%28coder_%29.md): Creates a new action to start or stop translating a call with the provided data.

### Accessing Action Attributes

- [isTranslating](cxsettranslatingcallaction/istranslating.md): A value that indicates whether translation is active for a call.

### Completing Actions

- [CXTranslationEngine](cxtranslationengine.md): Values that describe the translation engine that provided a translation.

### Instance Properties

- [localLanguage](cxsettranslatingcallaction/locallanguage.md)
- [remoteLanguage](cxsettranslatingcallaction/remotelanguage.md)

### Instance Methods

- [fulfillUsingTranslationEngine:](cxsettranslatingcallaction/fulfill%28using_%29.md)
- [initWithCallUUID:isTranslating:localLanguage:remoteLanguage:](cxsettranslatingcallaction/init%28call_istranslating_locallanguage_remotelanguage_%29.md)

## Relationships

### Inherits From

- [CXCallAction](cxcallaction.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Call-related actions

- [CXAction](cxaction.md): An abstract class that declares a programmatic interface for objects that represent a telephony action.
- [CXCallAction](cxcallaction.md): A programmatic interface for objects that represent a telephony action associated with a call object.
- [CXEndCallAction](cxendcallaction.md): An encapsulation of the act of ending a call.
- [CXPlayDTMFCallAction](cxplaydtmfcallaction.md): An encapsulation of the act of playing a dual tone multifrequency (DTMF) sequence.
- [CXSetGroupCallAction](cxsetgroupcallaction.md): An encapsulation of the act of grouping or ungrouping calls.
- [CXSetHeldCallAction](cxsetheldcallaction.md): An encapsulation of the act of placing a call on hold or removing a call from hold.
- [CXSetMutedCallAction](cxsetmutedcallaction.md): An encapsulation of the act of muting or unmuting a call.
