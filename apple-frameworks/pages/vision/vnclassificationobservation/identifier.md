> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnclassificationobservation/identifier](https://developer.apple.com/documentation/vision/vnclassificationobservation/identifier)

# identifier (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Classification label identifying the type of observation.

## Declaration

```swift
var identifier: String { get }
```

<a id="Discussion"></a>

## Discussion

An example classification could be a string like `cat` or `hotdog`.  The model used for the classification defines the domain of strings that may result.  Usually, these strings are unlocalized technical labels not meant for direct presentation to the end user.

# identifier (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Classification label identifying the type of observation.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

An example classification could be a string like `cat` or `hotdog`.  The model used for the classification defines the domain of strings that may result.  Usually, these strings are unlocalized technical labels not meant for direct presentation to the end user.
