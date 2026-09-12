> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpselectablelistitem/handler](https://developer.apple.com/documentation/carplay/cpselectablelistitem/handler)

# handler (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An optional closure that CarPlay invokes when the user selects the list item.

## Declaration

```swift
var handler: ((any CPSelectableListItem, @escaping () -> Void) -> Void)? { get set }
```

# handler (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An optional closure that CarPlay invokes when the user selects the list item.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^handler)(id<CPSelectableListItem>item, dispatch_block_t completionBlock);
```
