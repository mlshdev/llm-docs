> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiphotosearchsuggestion/whovalues](https://developer.apple.com/documentation/uikit/uiphotosearchsuggestion/whovalues)

# whoValues (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

People mentioned in the text that can be used to filter photos.

## Declaration

```swift
var whoValues: [String] { get }
```

<a id="discussion"></a>

## Discussion

For example, if the user types “photos with John,” this array might contain `@[@"John"]`.

# whoValues (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

People mentioned in the text that can be used to filter photos.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSString *> * whoValues;
```

<a id="discussion"></a>

## Discussion

For example, if the user types “photos with John,” this array might contain `@[@"John"]`.
