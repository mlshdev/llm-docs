> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation/progressmarks](https://developer.apple.com/documentation/appkit/nsanimation/progressmarks)

# progressMarks (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of floating-point numbers representing current progress marks.

## Declaration

```swift
var progressMarks: [NSNumber] { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an array of [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) objects, each of which contains a float value, which are typed to the [NSAnimation.Progress](progress.md) type. If there are no progress marks, the array is empty. Setting the value of this property is `nil` clears all progress marks.

## See Also

### Managing Progress Marks

- [addProgressMark(\_:)](addprogressmark%28__%29.md): Adds the progress mark to the receiver.
- [removeProgressMark(\_:)](removeprogressmark%28__%29.md): Removes progress mark from the receiver.

# progressMarks (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of floating-point numbers representing current progress marks.

## Declaration

```objectivec
@property (copy) NSArray<NSNumber *> * progressMarks;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an array of [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) objects, each of which contains a float value, which are typed to the [NSAnimationProgress](progress.md) type. If there are no progress marks, the array is empty. Setting the value of this property is `nil` clears all progress marks.

## See Also

### Managing Progress Marks

- [addProgressMark:](addprogressmark%28__%29.md): Adds the progress mark to the receiver.
- [removeProgressMark:](removeprogressmark%28__%29.md): Removes progress mark from the receiver.
