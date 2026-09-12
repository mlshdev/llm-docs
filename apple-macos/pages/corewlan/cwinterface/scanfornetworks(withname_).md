> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwinterface/scanfornetworks(withname:)](https://developer.apple.com/documentation/corewlan/cwinterface/scanfornetworks(withname:))

# scanForNetworks(withName:) (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Scans for networks.

## Declaration

```swift
func scanForNetworks(withName networkName: String?) throws -> Set<CWNetwork>
```

## Parameters

- `networkName`: The name (SSID) of the network for which to scan.

<a id="return-value"></a>

## Return Value

A set of CWNetwork objects.

<a id="Discussion"></a>

## Discussion

If *ssid* parameter is present, a directed scan will be performed by the interface, otherwise a broadcast scan will be performed. This method will block for the duration of the scan.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Scanning for networks

- [scanForNetworks(withSSID:)](scanfornetworks%28withssid_%29.md): Scans for networks.

# scanForNetworksWithName:error: (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Scans for networks.

## Declaration

```objectivec
- (NSSet<CWNetwork *> *) scanForNetworksWithName:(NSString *) networkName error:(NSError **) error;
```

## Parameters

- `networkName`: The name (SSID) of the network for which to scan.
- `error`: An NSError object passed by reference, which will be populated with the error code and the error description if an error occurs during the execution of this method. This parameter is optional and can be passed as *nil*.

<a id="return-value"></a>

## Return Value

A set of CWNetwork objects. On failure, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

If *ssid* parameter is present, a directed scan will be performed by the interface, otherwise a broadcast scan will be performed. This method will block for the duration of the scan.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Scanning for networks

- [scanForNetworksWithSSID:error:](scanfornetworks%28withssid_%29.md): Scans for networks.
