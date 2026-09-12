> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwinterface/setpower(_:)](https://developer.apple.com/documentation/corewlan/cwinterface/setpower(_:))

# setPower(\_:) (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Sets the interface power state.

## Declaration

```swift
func setPower(_ power: Bool) throws
```

## Parameters

- `power`: A Boolean value corresponding to the power state. *NO* indicates the “OFF” state.

<a id="Discussion"></a>

## Discussion

This operation may require an administrator password.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Setting interface parameters

- [setPairwiseMasterKey(\_:)](setpairwisemasterkey%28__%29.md): Sets the interface pairwise primary key (PMK).
- [setWEPKey(\_:flags:index:)](setwepkey%28__flags_index_%29.md): Sets the interface WEP key.
- [setWLANChannel(\_:)](setwlanchannel%28__%29.md): Sets the interface channel.

# setPower:error: (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Sets the interface power state.

## Declaration

```objectivec
- (BOOL) setPower:(BOOL) power error:(NSError **) error;
```

## Parameters

- `power`: A Boolean value corresponding to the power state. *NO* indicates the “OFF” state.
- `error`: An NSError object passed by reference, which will be populated with the error code and the error description if an error occurs during the execution of this method. This parameter is optional and can be passed as *nil*.

<a id="return-value"></a>

## Return Value

A Boolean value which will indicate whether or not a failure occurred during execution. *YES* indicates no error occurred.

<a id="Discussion"></a>

## Discussion

This operation may require an administrator password.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Setting interface parameters

- [setPairwiseMasterKey:error:](setpairwisemasterkey%28__%29.md): Sets the interface pairwise primary key (PMK).
- [setWEPKey:flags:index:error:](setwepkey%28__flags_index_%29.md): Sets the interface WEP key.
- [setWLANChannel:error:](setwlanchannel%28__%29.md): Sets the interface channel.
