> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwinterface/setpairwisemasterkey(_:)](https://developer.apple.com/documentation/corewlan/cwinterface/setpairwisemasterkey(_:))

# setPairwiseMasterKey(\_:) (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Sets the interface pairwise primary key (PMK).

## Declaration

```swift
func setPairwiseMasterKey(_ key: Data?) throws
```

## Parameters

- `key`: An NSData object containing the pairwise primary key (PMK).

<a id="Discussion"></a>

## Discussion

*key* must be 32 octets. If *key* is *nil*, this method clears the PMK for the interface.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Setting interface parameters

- [setPower(\_:)](setpower%28__%29.md): Sets the interface power state.
- [setWEPKey(\_:flags:index:)](setwepkey%28__flags_index_%29.md): Sets the interface WEP key.
- [setWLANChannel(\_:)](setwlanchannel%28__%29.md): Sets the interface channel.

# setPairwiseMasterKey:error: (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Sets the interface pairwise primary key (PMK).

## Declaration

```objectivec
- (BOOL) setPairwiseMasterKey:(NSData *) key error:(NSError **) error;
```

## Parameters

- `key`: An NSData object containing the pairwise primary key (PMK).
- `error`: An NSError object passed by reference, which will be populated with the error code and the error description if an error occurs during the execution of this method. This parameter is optional and can be passed as *nil*.

<a id="return-value"></a>

## Return Value

A Boolean value which will indicate whether or not a failure occurred during execution. *YES* indicates no error occurred.

<a id="Discussion"></a>

## Discussion

*key* must be 32 octets. If *key* is *nil*, this method clears the PMK for the interface.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Setting interface parameters

- [setPower:error:](setpower%28__%29.md): Sets the interface power state.
- [setWEPKey:flags:index:error:](setwepkey%28__flags_index_%29.md): Sets the interface WEP key.
- [setWLANChannel:error:](setwlanchannel%28__%29.md): Sets the interface channel.
