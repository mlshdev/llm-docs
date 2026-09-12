> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdictionarycontroller/newobject()](https://developer.apple.com/documentation/appkit/nsdictionarycontroller/newobject())

# newObject() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Creates and returns a new key-value pair to represent an entry in the content dictionary.

## Declaration

```swift
func newObject() -> NSDictionaryControllerKeyValuePair
```

<a id="return-value"></a>

## Return Value

An object that represents the key-value pair. The object must not be autoreleased, and must implement the NSDictionaryControllerKeyValuePair informal protocol

<a id="Discussion"></a>

## Discussion

This method is invoked for insertions of new key-value pairs, as well as transforming existing dictionary entries into key-value pairs for display. Objects returned by this method must implement the NSDictionaryControllerKeyValuePair informal protocol.

<a id="Special-Considerations"></a>

### Special Considerations

Subclass implementations must ensure that the object returned by `newObject` is not autoreleased.

# newObject (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Creates and returns a new key-value pair to represent an entry in the content dictionary.

## Declaration

```objectivec
- (NSDictionaryControllerKeyValuePair *) newObject;
```

<a id="return-value"></a>

## Return Value

An object that represents the key-value pair. The object must not be autoreleased, and must implement the NSDictionaryControllerKeyValuePair informal protocol

<a id="Discussion"></a>

## Discussion

This method is invoked for insertions of new key-value pairs, as well as transforming existing dictionary entries into key-value pairs for display. Objects returned by this method must implement the NSDictionaryControllerKeyValuePair informal protocol.

<a id="Special-Considerations"></a>

### Special Considerations

Subclass implementations must ensure that the object returned by `newObject` is not autoreleased.
