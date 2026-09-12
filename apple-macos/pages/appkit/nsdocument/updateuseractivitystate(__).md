> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdocument/updateuseractivitystate(_:)](https://developer.apple.com/documentation/appkit/nsdocument/updateuseractivitystate(_:))

# updateUserActivityState(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Updates the state of the given user activity.

## Declaration

```swift
func updateUserActivityState(_ activity: NSUserActivity)
```

## Parameters

- `activity`: The user activity to be updated.

<a id="Discussion"></a>

## Discussion

The default implementation of this method puts the document’s [fileURL](fileurl.md) into the [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) object’s [userInfo](https://developer.apple.com/documentation/foundation/nsuseractivity/userinfo) dictionary with the [NSUserActivityDocumentURLKey](../nsuseractivitydocumenturlkey.md). [NSDocument](../nsdocument.md) automatically sets the [needsSave](https://developer.apple.com/documentation/foundation/nsuseractivity/needssave) property of the [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) to [true](https://developer.apple.com/documentation/swift/true) when the [fileURL](fileurl.md) changes.

## See Also

### Related Documentation

- [NSDocument](../nsdocument.md): An abstract class that defines the interface for macOS documents.

### Supporting User Activities

- [userActivity](useractivity.md): An object that encapsulates a user activity the document supports.
- [NSUserActivityDocumentURLKey](../nsuseractivitydocumenturlkey.md): The key that identifies the document associated with a user activity.

# updateUserActivityState: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Updates the state of the given user activity.

## Declaration

```objectivec
- (void) updateUserActivityState:(NSUserActivity *) activity;
```

## Parameters

- `activity`: The user activity to be updated.

<a id="Discussion"></a>

## Discussion

The default implementation of this method puts the document’s [fileURL](fileurl.md) into the [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) object’s [userInfo](https://developer.apple.com/documentation/foundation/nsuseractivity/userinfo) dictionary with the [NSUserActivityDocumentURLKey](../nsuseractivitydocumenturlkey.md). [NSDocument](../nsdocument.md) automatically sets the [needsSave](https://developer.apple.com/documentation/foundation/nsuseractivity/needssave) property of the [NSUserActivity](https://developer.apple.com/documentation/foundation/nsuseractivity) to [true](https://developer.apple.com/documentation/swift/true) when the [fileURL](fileurl.md) changes.

## See Also

### Related Documentation

- [NSDocument](../nsdocument.md): An abstract class that defines the interface for macOS documents.

### Supporting User Activities

- [userActivity](useractivity.md): An object that encapsulates a user activity the document supports.
- [NSUserActivityDocumentURLKey](../nsuseractivitydocumenturlkey.md): The key that identifies the document associated with a user activity.
