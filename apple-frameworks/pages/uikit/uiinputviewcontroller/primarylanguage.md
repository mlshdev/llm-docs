> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiinputviewcontroller/primarylanguage

# primaryLanguage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The primary language for a custom keyboard.

## Declaration

```swift
var primaryLanguage: String? { get set }
```

<a id="Discussion"></a>

## Discussion

A BCP 47 language identifier, such as `en-US`. If specified, this value supersedes the `PrimaryLanguage` key in a custom keyboard’s `Info.plist` file.

# primaryLanguage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The primary language for a custom keyboard.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * primaryLanguage;
```

<a id="Discussion"></a>

## Discussion

A BCP 47 language identifier, such as `en-US`. If specified, this value supersedes the `PrimaryLanguage` key in a custom keyboard’s `Info.plist` file.
