> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstexttab/optionkey/columnterminators](https://developer.apple.com/documentation/uikit/nstexttab/optionkey/columnterminators)

# columnTerminators (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value is an `NSCharacterSet` object.

## Declaration

```swift
static let columnTerminators: NSTextTab.OptionKey
```

<a id="Discussion"></a>

## Discussion

The character set is used to determine the terminating character for a tab column. The tab and newline characters are implied even if they don’t exist in the character set. This attribute is optional.

# NSTabColumnTerminatorsAttributeName (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value is an `NSCharacterSet` object.

## Declaration

```objectivec
extern NSTextTabOptionKey const NSTabColumnTerminatorsAttributeName;
```

<a id="Discussion"></a>

## Discussion

The character set is used to determine the terminating character for a tab column. The tab and newline characters are implied even if they don’t exist in the character set. This attribute is optional.
