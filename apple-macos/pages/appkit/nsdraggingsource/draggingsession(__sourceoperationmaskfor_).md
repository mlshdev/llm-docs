> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingsource/draggingsession(_:sourceoperationmaskfor:)](https://developer.apple.com/documentation/appkit/nsdraggingsource/draggingsession(_:sourceoperationmaskfor:))

# draggingSession(\_:sourceOperationMaskFor:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Declares the types of operations the source allows to be performed.

## Declaration

```swift
@MainActor func draggingSession(_ session: NSDraggingSession, sourceOperationMaskFor context: NSDraggingContext) -> NSDragOperation
```

## Parameters

- `session`: The dragging session.
- `context`: The dragging context. See [NSDraggingContext](../nsdraggingcontext.md) for the supported values.

<a id="return-value"></a>

## Return Value

A dragging operation you specify.

<a id="Discussion"></a>

## Discussion

To account for unexpected contexts, set a `default` case for the most specific context your app handles. The following code shows an example that handles different dragging contexts and includes a default case.

```objc
    switch(context) {
        case NSDraggingContextOutsideApplication:
            return NSDragOperationCopy;
 
        case NSDraggingContextWithinApplication:
        default:
            return NSDragOperationCopy | NSDragOperationMove;
    }
```

# draggingSession:sourceOperationMaskForDraggingContext: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Declares the types of operations the source allows to be performed.

## Declaration

```objectivec
- (NSDragOperation) draggingSession:(NSDraggingSession *) session sourceOperationMaskForDraggingContext:(NSDraggingContext) context;
```

## Parameters

- `session`: The dragging session.
- `context`: The dragging context. See [NSDraggingContext](../nsdraggingcontext.md) for the supported values.

<a id="return-value"></a>

## Return Value

A dragging operation you specify.

<a id="Discussion"></a>

## Discussion

To account for unexpected contexts, set a `default` case for the most specific context your app handles. The following code shows an example that handles different dragging contexts and includes a default case.

```objc
    switch(context) {
        case NSDraggingContextOutsideApplication:
            return NSDragOperationCopy;
 
        case NSDraggingContextWithinApplication:
        default:
            return NSDragOperationCopy | NSDragOperationMove;
    }
```
