> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsarraycontroller/add(_:)](https://developer.apple.com/documentation/appkit/nsarraycontroller/add(_:))

# add(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates and adds a new object to the receiver’s content and arranged objects.

## Declaration

```swift
@IBAction func add(_ sender: Any?)
```

## Parameters

- `sender`: Typically the object that invoked this method.

<a id="Discussion"></a>

## Discussion

Beginning with OS X v10.4 the result of this method is deferred until the next iteration of the runloop so that the error presentation mechanism can provide feedback as a sheet.

# add: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates and adds a new object to the receiver’s content and arranged objects.

## Declaration

```objectivec
- (void) add:(id) sender;
```

## Parameters

- `sender`: Typically the object that invoked this method.

<a id="Discussion"></a>

## Discussion

Beginning with OS X v10.4 the result of this method is deferred until the next iteration of the runloop so that the error presentation mechanism can provide feedback as a sheet.
