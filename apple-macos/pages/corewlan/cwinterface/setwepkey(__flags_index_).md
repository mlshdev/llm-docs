> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwinterface/setwepkey(_:flags:index:)](https://developer.apple.com/documentation/corewlan/cwinterface/setwepkey(_:flags:index:))

# setWEPKey(\_:flags:index:) (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Sets the interface WEP key.

## Declaration

```swift
func setWEPKey(_ key: Data?, flags: CWCipherKeyFlags, index: Int) throws
```

## Parameters

- `key`: An NSData object containing the WEP key.
- `flags`: An NSUInteger indicating which cipher key flags to use for the specified key.
- `index`: An NSUInteger indicating which default key index to use for the specified key.

<a id="Discussion"></a>

## Discussion

*key* must be 5 octets for WEP-40 or 13 octets for WEP-104. If *key* is *nil*, this method clears the WEP key for the interface. *index* must correspond to default key index 1-4.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Setting interface parameters

- [setPairwiseMasterKey(\_:)](setpairwisemasterkey%28__%29.md): Sets the interface pairwise primary key (PMK).
- [setPower(\_:)](setpower%28__%29.md): Sets the interface power state.
- [setWLANChannel(\_:)](setwlanchannel%28__%29.md): Sets the interface channel.

# setWEPKey:flags:index:error: (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Sets the interface WEP key.

## Declaration

```objectivec
- (BOOL) setWEPKey:(NSData *) key flags:(CWCipherKeyFlags) flags index:(NSInteger) index error:(NSError **) error;
```

## Parameters

- `key`: An NSData object containing the WEP key.
- `flags`: An NSUInteger indicating which cipher key flags to use for the specified key.
- `index`: An NSUInteger indicating which default key index to use for the specified key.
- `error`: An NSError object passed by reference, which will be populated with the error code and the error description if an error occurs during the execution of this method. This parameter is optional and can be passed as *nil*.

<a id="return-value"></a>

## Return Value

A Boolean value which will indicate whether or not a failure occurred during execution. *YES* indicates no error occurred.

<a id="Discussion"></a>

## Discussion

*key* must be 5 octets for WEP-40 or 13 octets for WEP-104. If *key* is *nil*, this method clears the WEP key for the interface. *index* must correspond to default key index 1-4.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Setting interface parameters

- [setPairwiseMasterKey:error:](setpairwisemasterkey%28__%29.md): Sets the interface pairwise primary key (PMK).
- [setPower:error:](setpower%28__%29.md): Sets the interface power state.
- [setWLANChannel:error:](setwlanchannel%28__%29.md): Sets the interface channel.
