> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddpassesviewcontrollerdelegate/addpassesviewcontrollerdidfinish(_:)](https://developer.apple.com/documentation/passkit/pkaddpassesviewcontrollerdelegate/addpassesviewcontrollerdidfinish(_:))

# addPassesViewControllerDidFinish(\_:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sent to the delegate after the add-passes view controller has finished.

## Declaration

```swift
optional func addPassesViewControllerDidFinish(_ controller: PKAddPassesViewController)
```

<a id="Discussion"></a>

## Discussion

When this optional method is implemented, the delegate is responsible for dismissing the view controller in `controller`.

## See Also

### Related Documentation

- [Wallet Developer Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/PassKit_PG/index.html#//apple_ref/doc/uid/TP40012195)

# addPassesViewControllerDidFinish: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Sent to the delegate after the add-passes view controller has finished.

## Declaration

```objectivec
- (void) addPassesViewControllerDidFinish:(PKAddPassesViewController *) controller;
```

<a id="Discussion"></a>

## Discussion

When this optional method is implemented, the delegate is responsible for dismissing the view controller in `controller`.

## See Also

### Related Documentation

- [Wallet Developer Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/PassKit_PG/index.html#//apple_ref/doc/uid/TP40012195)
