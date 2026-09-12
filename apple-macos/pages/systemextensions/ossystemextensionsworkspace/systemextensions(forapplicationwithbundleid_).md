> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionsworkspace/systemextensions(forapplicationwithbundleid:)](https://developer.apple.com/documentation/systemextensions/ossystemextensionsworkspace/systemextensions(forapplicationwithbundleid:))

# systemExtensions(forApplicationWithBundleID:) (Swift)

**Framework:** System Extensions  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

## Declaration

```swift
func systemExtensions(forApplicationWithBundleID bundleID: String) throws -> Set<OSSystemExtensionProperties>
```

## Parameters

- `bundleID`: BundleIdentifier of the application containing the system extension(s)

<a id="return-value"></a>

## Return Value

A set of system extension property objects on success, nil otherwise.

<a id="discussion"></a>

## Discussion

Get information about system extension(s) in an app with a bundle identifier

# systemExtensionsForApplicationWithBundleID:error: (Objective-C)

**Framework:** System Extensions  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

## Declaration

```objectivec
- (NSSet<OSSystemExtensionProperties *> *) systemExtensionsForApplicationWithBundleID:(NSString *) bundleID error:(NSError **) out_error;
```

## Parameters

- `bundleID`: BundleIdentifier of the application containing the system extension(s)
- `out_error`: Error parameter to be populated with relevant error information

<a id="return-value"></a>

## Return Value

A set of system extension property objects on success, nil otherwise.

<a id="discussion"></a>

## Discussion

Get information about system extension(s) in an app with a bundle identifier
