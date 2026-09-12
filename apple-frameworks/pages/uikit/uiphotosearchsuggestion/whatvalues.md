> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiphotosearchsuggestion/whatvalues](https://developer.apple.com/documentation/uikit/uiphotosearchsuggestion/whatvalues)

# whatValues (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Subjects or topics mentioned in the text that can be used to filter photos.

## Declaration

```swift
var whatValues: [String] { get }
```

<a id="discussion"></a>

## Discussion

For example, if the user types “photos of food,” this array might contain `@[@"food"]`.

# whatValues (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Subjects or topics mentioned in the text that can be used to filter photos.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSString *> * whatValues;
```

<a id="discussion"></a>

## Discussion

For example, if the user types “photos of food,” this array might contain `@[@"food"]`.
