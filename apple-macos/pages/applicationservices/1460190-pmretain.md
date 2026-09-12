> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1460190-pmretain](https://developer.apple.com/documentation/applicationservices/1460190-pmretain)

# PMRetain(\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Retains a printing object by incrementing its reference count.

## Declaration

```swift
func PMRetain(_ object: PMObject?) -> OSStatus
```

## Parameters

- `object`: The printing object you want to retain.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

You should retain a printing object when you receive it from elsewhere (that is, you did not create or copy it) and you want it to persist. If you retain a printing object, you are responsible for releasing it. (See `PMRelease`.) You can use the function `PMRetain` to increment a printing object’s reference count so that multiple threads or routines can use the object without the risk of another thread or routine deallocating the object.

## See Also

### Releasing and Retaining Printing Objects

- [PMRelease(\_:)](1461402-pmrelease.md): Releases a printing object by decrementing its reference count.

# PMRetain (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Retains a printing object by incrementing its reference count.

## Declaration

```objectivec
OSStatus PMRetain(PMObject object);
```

## Parameters

- `object`: The printing object you want to retain.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](core_printing.md#1670007).

<a id="discussion"></a>

## Discussion

You should retain a printing object when you receive it from elsewhere (that is, you did not create or copy it) and you want it to persist. If you retain a printing object, you are responsible for releasing it. (See `PMRelease`.) You can use the function `PMRetain` to increment a printing object’s reference count so that multiple threads or routines can use the object without the risk of another thread or routine deallocating the object.

## See Also

### Releasing and Retaining Printing Objects

- [PMRelease](1461402-pmrelease.md): Releases a printing object by decrementing its reference count.
