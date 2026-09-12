> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstexttab/optionkey/columnterminators](https://developer.apple.com/documentation/appkit/nstexttab/optionkey/columnterminators)

# columnTerminators (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+

The value is an `NSCharacterSet` object.

## Declaration

```swift
static let columnTerminators: NSTextTab.OptionKey
```

<a id="Discussion"></a>

## Discussion

The character set is used to determine the terminating character for a tab column. The tab and newline characters are implied even if they don’t exist in the character set. This attribute is optional.

# NSTabColumnTerminatorsAttributeName (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

The value is an `NSCharacterSet` object.

## Declaration

```objectivec
extern NSTextTabOptionKey NSTabColumnTerminatorsAttributeName;
```

<a id="Discussion"></a>

## Discussion

The character set is used to determine the terminating character for a tab column. The tab and newline characters are implied even if they don’t exist in the character set. This attribute is optional.
