> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentprojection](https://developer.apple.com/documentation/appintents/intentprojection)

# IntentProjection

**Framework:** App Intents  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Projections for an app intent that returns non-optional values for parameters.

## Declaration

```swift
@dynamicMemberLookup final class IntentProjection<Intent> where Intent : AppIntent
```

<a id="overview"></a>

## Overview

Use an `IntentProjection` to create an app intent that returns non-optional values for parameters you list using an [IntentParameterDependency](intentparameterdependency.md) property wrapper.

## Topics

### Subscripts

- [subscript(dynamicMember:)](intentprojection/subscript%28dynamicmember_%29.md)

## See Also

### Intent-related data

- [IntentModes](intentmodes.md): A set of options you use to configure the runtime behavior of an app intent.
- [IntentSystemContext](intentsystemcontext.md): Contextual information that the system provides while it performs an app intent.
- [IntentDescription](intentdescription.md): The human-readable description and metadata for an app intent.
- [IntentDialog](intentdialog.md): The text you want the system to display, or speak, when requesting a value, asking for disambiguation, or confirming an action.
- [IntentDeprecation](intentdeprecation.md)
