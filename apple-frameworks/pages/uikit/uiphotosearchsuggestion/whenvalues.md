> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiphotosearchsuggestion/whenvalues](https://developer.apple.com/documentation/uikit/uiphotosearchsuggestion/whenvalues)

# whenValues (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Time periods mentioned in the text that can be used to filter photos.

## Declaration

```swift
var whenValues: [String] { get }
```

<a id="discussion"></a>

## Discussion

For example, if the user types “photos from last summer,” this array might contain `@[@"last summer"]`.

# whenValues (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Time periods mentioned in the text that can be used to filter photos.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSString *> * whenValues;
```

<a id="discussion"></a>

## Discussion

For example, if the user types “photos from last summer,” this array might contain `@[@"last summer"]`.
