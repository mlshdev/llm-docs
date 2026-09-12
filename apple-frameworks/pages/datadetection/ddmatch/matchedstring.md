> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/ddmatch/matchedstring](https://developer.apple.com/documentation/datadetection/ddmatch/matchedstring)

# matchedString (Swift)

**Framework:** DataDetection  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A substring that the data detection system identifies from an original string as a common type of data.

## Declaration

```swift
var matchedString: String { get }
```

<a id="Discussion"></a>

## Discussion

Use `DDMatch` subclasses that the data detection system provides for a semantic interpretation of this string.

# matchedString (Objective-C)

**Framework:** DataDetection  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A substring that the data detection system identifies from an original string as a common type of data.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * matchedString;
```

<a id="Discussion"></a>

## Discussion

Use `DDMatch` subclasses that the data detection system provides for a semantic interpretation of this string.
