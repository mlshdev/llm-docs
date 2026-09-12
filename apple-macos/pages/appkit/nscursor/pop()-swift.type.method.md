> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscursor/pop()-swift.type.method](https://developer.apple.com/documentation/appkit/nscursor/pop()-swift.type.method)

# pop() (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.0+

Pops the current cursor off the top of the stack.

## Declaration

```swift
class func pop()
```

<a id="Discussion"></a>

## Discussion

The new object on the top of the stack becomes the current cursor. If the current cursor is the only cursor on the stack, this method does nothing.

## See Also

### Controlling which cursor is current

- [pop()](pop%28%29-swift.method.md): Sends a [pop()](pop%28%29-swift.type.method.md) message to the receiver’s class.
- [push()](push%28%29.md): Puts the receiver on top of the cursor stack and makes it the current cursor.
- [set()](set%28%29.md): Makes the receiver the current cursor.

# pop (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.0+

Pops the current cursor off the top of the stack.

## Declaration

```objectivec
+ (void) pop;
```

<a id="Discussion"></a>

## Discussion

The new object on the top of the stack becomes the current cursor. If the current cursor is the only cursor on the stack, this method does nothing.

## See Also

### Controlling which cursor is current

- [pop](pop%28%29-swift.method.md): Sends a [pop](pop%28%29-swift.type.method.md) message to the receiver’s class.
- [push](push%28%29.md): Puts the receiver on top of the cursor stack and makes it the current cursor.
- [set](set%28%29.md): Makes the receiver the current cursor.
