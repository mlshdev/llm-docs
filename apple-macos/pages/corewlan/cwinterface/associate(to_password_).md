> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwinterface/associate(to:password:)](https://developer.apple.com/documentation/corewlan/cwinterface/associate(to:password:))

# associate(to:password:) (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Associates to a given network using the given network passphrase.

## Declaration

```swift
func associate(to network: CWNetwork, password: String?) throws
```

## Parameters

- `network`: The network to which the interface will associate.
- `password`: The network passphrase or key. Required for association to WEP, WPA Personal, and WPA2 Personal networks.

<a id="Discussion"></a>

## Discussion

This method will block for the duration of the association. This operation may require an administrator password.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Associating to a network

- [associate(toEnterpriseNetwork:identity:username:password:)](associate%28toenterprisenetwork_identity_username_password_%29.md): Connects to the given enterprise network.

# associateToNetwork:password:error: (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Associates to a given network using the given network passphrase.

## Declaration

```objectivec
- (BOOL) associateToNetwork:(CWNetwork *) network password:(NSString *) password error:(NSError **) error;
```

## Parameters

- `network`: The network to which the interface will associate.
- `password`: The network passphrase or key. Required for association to WEP, WPA Personal, and WPA2 Personal networks.
- `error`: An NSError object passed by reference, which will be populated with the error code and the error description if an error occurs during the execution of this method. This parameter is optional and can be passed as *nil*.

<a id="return-value"></a>

## Return Value

A Boolean value which will indicate whether or not a failure occurred during execution. *YES* indicates no error occurred.

<a id="Discussion"></a>

## Discussion

This method will block for the duration of the association. This operation may require an administrator password.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Associating to a network

- [associateToEnterpriseNetwork:identity:username:password:error:](associate%28toenterprisenetwork_identity_username_password_%29.md): Connects to the given enterprise network.
