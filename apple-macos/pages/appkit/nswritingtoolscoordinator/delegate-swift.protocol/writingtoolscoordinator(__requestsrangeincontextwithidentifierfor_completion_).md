> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/delegate-swift.protocol/writingtoolscoordinator(_:requestsrangeincontextwithidentifierfor:completion:)](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/delegate-swift.protocol/writingtoolscoordinator(_:requestsrangeincontextwithidentifierfor:completion:))

# writingToolsCoordinator(\_:requestsRangeInContextWithIdentifierFor:completion:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.2+ (deprecated in 15.4)

Asks the delegate to provide the location of the character at the specified point in your view’s coordinate system.

> In macOS 15.4 and later, NSWritingToolsCoordinator automatically determines the location of the character at the specified point in your view's coordinate system and no longer calls this method.

## Declaration

```swift
optional func writingToolsCoordinator(_ writingToolsCoordinator: NSWritingToolsCoordinator, requestsRangeInContextWithIdentifierFor point: NSPoint, completion: @escaping @Sendable (NSRange, UUID) -> Void)
```

```swift
optional func writingToolsCoordinator(_ writingToolsCoordinator: NSWritingToolsCoordinator, rangeInContextWithIdentifierFor point: NSPoint) async -> (NSRange, UUID)
```

## Parameters

- `writingToolsCoordinator`: The coordinator object requesting information from your custom view.
- `point`: A point in your view’s coordinate space. Find the location of the text under this point, if any.
- `completion`: A handler to execute with the required information. This handler has no return value and takes an [NSRange](https://developer.apple.com/documentation/foundation/nsrange-c.struct) and [UUID](https://developer.apple.com/documentation/foundation/uuid) as parameters. Set the range to the character’s location in one of your [NSWritingToolsCoordinator.Context](../context.md) objects, which you specify using the [UUID](https://developer.apple.com/documentation/foundation/uuid) parameter. You must call this handler at some point during your method’s implementation.

<a id="discussion"></a>

## Discussion

When someone interacts with your view during a proofreading operation, Writing Tools calls this method to get the location of the interaction. If the interaction occurs in the text of one of your [NSWritingToolsCoordinator.Context](../context.md) objects, configure an [NSRange](https://developer.apple.com/documentation/foundation/nsrange-c.struct) with the character’s location in that context object and a length of `1`. If the interaction occurs outside of the text of your context objects, configure the range with a location of `NSNotFound`.

When specifying the location of a character in your context object, provide a location relative to the start of your context object’s text. The first character in a context object’s text is always at location `0`, and it’s your responsibility to track the location of the context object’s text in your text storage object. When the context object’s text begins in the middle of your text storage, subtract the starting location of the context object’s text from the location you specify in your range value. For example, if the context object’s text starts at character `100` in your text storage, and an interaction occurs with the character at location `102`, specify a range with a location of `2` and a length of `1`.

## See Also

### Displaying proofreading marks

- [writingToolsCoordinator(\_:requestsBoundingBezierPathsFor:in:completion:)](writingtoolscoordinator%28__requestsboundingbezierpathsfor_in_completion_%29.md): Asks the delegate to provide the bounding paths for the specified text in your view.
- [writingToolsCoordinator(\_:requestsUnderlinePathsFor:in:completion:)](writingtoolscoordinator%28__requestsunderlinepathsfor_in_completion_%29.md): Asks the delegate to provide an underline shape for the specified text during a proofreading session.

# writingToolsCoordinator:requestsRangeInContextWithIdentifierForPoint:completion: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.2+ (deprecated in 15.4)

Asks the delegate to provide the location of the character at the specified point in your view’s coordinate system.

> In macOS 15.4 and later, NSWritingToolsCoordinator automatically determines the location of the character at the specified point in your view's coordinate system and no longer calls this method.

## Declaration

```objectivec
- (void) writingToolsCoordinator:(NSWritingToolsCoordinator *) writingToolsCoordinator requestsRangeInContextWithIdentifierForPoint:(NSPoint) point completion:(void (^)(NSRange range, NSUUID *contextID)) completion;
```

## Parameters

- `writingToolsCoordinator`: The coordinator object requesting information from your custom view.
- `point`: A point in your view’s coordinate space. Find the location of the text under this point, if any.
- `completion`: A handler to execute with the required information. This handler has no return value and takes an [NSRange](https://developer.apple.com/documentation/foundation/nsrange-c.struct) and [UUID](https://developer.apple.com/documentation/foundation/uuid) as parameters. Set the range to the character’s location in one of your [NSWritingToolsCoordinatorContext](../context.md) objects, which you specify using the [UUID](https://developer.apple.com/documentation/foundation/uuid) parameter. You must call this handler at some point during your method’s implementation.

<a id="discussion"></a>

## Discussion

When someone interacts with your view during a proofreading operation, Writing Tools calls this method to get the location of the interaction. If the interaction occurs in the text of one of your [NSWritingToolsCoordinatorContext](../context.md) objects, configure an [NSRange](https://developer.apple.com/documentation/foundation/nsrange-c.struct) with the character’s location in that context object and a length of `1`. If the interaction occurs outside of the text of your context objects, configure the range with a location of `NSNotFound`.

When specifying the location of a character in your context object, provide a location relative to the start of your context object’s text. The first character in a context object’s text is always at location `0`, and it’s your responsibility to track the location of the context object’s text in your text storage object. When the context object’s text begins in the middle of your text storage, subtract the starting location of the context object’s text from the location you specify in your range value. For example, if the context object’s text starts at character `100` in your text storage, and an interaction occurs with the character at location `102`, specify a range with a location of `2` and a length of `1`.

## See Also

### Displaying proofreading marks

- [writingToolsCoordinator:requestsBoundingBezierPathsForRange:inContext:completion:](writingtoolscoordinator%28__requestsboundingbezierpathsfor_in_completion_%29.md): Asks the delegate to provide the bounding paths for the specified text in your view.
- [writingToolsCoordinator:requestsUnderlinePathsForRange:inContext:completion:](writingtoolscoordinator%28__requestsunderlinepathsfor_in_completion_%29.md): Asks the delegate to provide an underline shape for the specified text during a proofreading session.
