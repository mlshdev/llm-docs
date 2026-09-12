> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/current](https://developer.apple.com/documentation/appkit/nsprintoperation/current)

# current (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The current print operation for this thread.

## Declaration

```swift
class var current: NSPrintOperation? { get set }
```

<a id="return-value"></a>

## Return Value

The print operation object, or `nil` if there is no current operation.

# currentOperation (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The current print operation for this thread.

## Declaration

```objectivec
@property (class, strong, nullable) NSPrintOperation * currentOperation;
```

<a id="return-value"></a>

## Return Value

The print operation object, or `nil` if there is no current operation.
