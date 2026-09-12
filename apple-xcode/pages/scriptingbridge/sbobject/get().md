> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbobject/get()](https://developer.apple.com/documentation/scriptingbridge/sbobject/get())

# get() (Swift)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Forces evaluation of the receiver, causing the real object to be returned immediately.

## Declaration

```swift
func get() -> Any?
```

<a id="return-value"></a>

## Return Value

For most properties, the result is a Foundation object such as an `NSString`. For properties with no Foundation equivalent, the result is an `NSAppleEventDescriptor` or another [SBObject](../sbobject.md) for most elements.

<a id="discussion"></a>

## Discussion

This method forces the current object reference (the receiver) to be evaluated, resulting in the return of the referenced object. By default, Scripting Bridge deals with references to objects until you actually request some concrete data from them or until you call the `get` method.

# get (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Forces evaluation of the receiver, causing the real object to be returned immediately.

## Declaration

```objectivec
- (id) get;
```

<a id="return-value"></a>

## Return Value

For most properties, the result is a Foundation object such as an `NSString`. For properties with no Foundation equivalent, the result is an `NSAppleEventDescriptor` or another [SBObject](../sbobject.md) for most elements.

<a id="discussion"></a>

## Discussion

This method forces the current object reference (the receiver) to be evaluated, resulting in the return of the referenced object. By default, Scripting Bridge deals with references to objects until you actually request some concrete data from them or until you call the `get` method.
