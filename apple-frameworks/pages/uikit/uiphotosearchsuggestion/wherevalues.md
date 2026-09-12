> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiphotosearchsuggestion/wherevalues](https://developer.apple.com/documentation/uikit/uiphotosearchsuggestion/wherevalues)

# whereValues (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Locations mentioned in the text that can be used to filter photos.

## Declaration

```swift
var whereValues: [String] { get }
```

<a id="discussion"></a>

## Discussion

For example, if the user types “pictures from Paris,” this array might contain `@[@"Paris"]`.

# whereValues (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Locations mentioned in the text that can be used to filter photos.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSString *> * whereValues;
```

<a id="discussion"></a>

## Discussion

For example, if the user types “pictures from Paris,” this array might contain `@[@"Paris"]`.
