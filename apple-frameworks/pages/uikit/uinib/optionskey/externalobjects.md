> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinib/optionskey/externalobjects](https://developer.apple.com/documentation/uikit/uinib/optionskey/externalobjects)

# externalObjects (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The replacements for any proxy objects in the nib file.

## Declaration

```swift
static let externalObjects: UINib.OptionsKey
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSDictionary](../../../foundation/nsdictionary.md) object. The keys of the dictionary are the names of any proxy objects in the nib file, and the value for each key is the actual object to use in place of the proxy.

# UINibExternalObjects (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The replacements for any proxy objects in the nib file.

## Declaration

```objectivec
extern UINibOptionsKey const UINibExternalObjects;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSDictionary](../../../foundation/nsdictionary.md) object. The keys of the dictionary are the names of any proxy objects in the nib file, and the value for each key is the actual object to use in place of the proxy.
