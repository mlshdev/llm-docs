> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptobjectspecifier/child](https://developer.apple.com/documentation/foundation/nsscriptobjectspecifier/child)

# child (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the receiver’s child reference.

## Declaration

```swift
unowned(unsafe) var child: NSScriptObjectSpecifier? { get set }
```

## Parameters

- `child`: The receiver’s child reference.

<a id="Discussion"></a>

## Discussion

Do not invoke this method directly; it is automatically invoked by [container](container.md).

# childSpecifier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the receiver’s child reference.

## Declaration

```objectivec
@property (assign, nullable) NSScriptObjectSpecifier * childSpecifier;
```

## Parameters

- `child`: The receiver’s child reference.

<a id="Discussion"></a>

## Discussion

Do not invoke this method directly; it is automatically invoked by [containerSpecifier](container.md).
