> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbelementarray/get()](https://developer.apple.com/documentation/scriptingbridge/sbelementarray/get())

# get() (Swift)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Forces evaluation of the receiver, causing the real object to be returned immediately.

## Declaration

```swift
func get() -> [Any]?
```

<a id="return-value"></a>

## Return Value

The object referenced by the receiver.

<a id="discussion"></a>

## Discussion

This method forces the evaluation of the current object reference (the receiver), resulting in the return of the referenced object. By default, Scripting Bridge deals with references to objects until you actually request some concrete data from them or until you call the `get` method.

# get (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Forces evaluation of the receiver, causing the real object to be returned immediately.

## Declaration

```objectivec
- (NSArray<id> *) get;
```

<a id="return-value"></a>

## Return Value

The object referenced by the receiver.

<a id="discussion"></a>

## Discussion

This method forces the evaluation of the current object reference (the receiver), resulting in the return of the referenced object. By default, Scripting Bridge deals with references to objects until you actually request some concrete data from them or until you call the `get` method.
