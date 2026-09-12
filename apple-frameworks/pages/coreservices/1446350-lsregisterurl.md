> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1446350-lsregisterurl](https://developer.apple.com/documentation/coreservices/1446350-lsregisterurl)

# LSRegisterURL(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.3+

Registers an app, using a URL, in the Launch Services database.

## Declaration

```swift
func LSRegisterURL(_ inURL: CFURL, _ inUpdate: Bool) -> OSStatus
```

## Parameters

- `inFileURL`: A Core Foundation URL reference designating the app to be registered; see the *CFURL Reference* in the Core Foundation Reference Documentation for a description of the `CFURLRef` data type. The URL must have scheme `file` and contain a valid path to an app file or app bundle.
- `inUpdate`: A Boolean value specifying whether Launch Services should update existing information registered for the app, if any. If this parameter is `false`, the app will not be registered if it has already been registered previously and its current modification date has not changed from when it was last registered; if the parameter is `true`, the app’s registered information will be updated even if its modification date has not changed.

<a id="return_value"></a>

## Return Value

A result code; see [Result Codes](launch_services.md#1661359).

<a id="discussion"></a>

## Discussion

This function adds the designated application and its document and URL claims (if any) to the Launch Services database, making the application a candidate for document and URL binding.

<a id="1676155"></a>

### Version-Notes

Thread-safe since Mac OS version 10.3.

# LSRegisterURL (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.3+

Registers an app, using a URL, in the Launch Services database.

## Declaration

```objectivec
OSStatus LSRegisterURL(CFURLRef inURL, Boolean inUpdate);
```

## Parameters

- `inFileURL`: A Core Foundation URL reference designating the app to be registered; see the *CFURL Reference* in the Core Foundation Reference Documentation for a description of the `CFURLRef` data type. The URL must have scheme `file` and contain a valid path to an app file or app bundle.
- `inUpdate`: A Boolean value specifying whether Launch Services should update existing information registered for the app, if any. If this parameter is `false`, the app will not be registered if it has already been registered previously and its current modification date has not changed from when it was last registered; if the parameter is `true`, the app’s registered information will be updated even if its modification date has not changed.

<a id="return_value"></a>

## Return Value

A result code; see [Result Codes](launch_services.md#1661359).

<a id="discussion"></a>

## Discussion

This function adds the designated application and its document and URL claims (if any) to the Launch Services database, making the application a candidate for document and URL binding.

<a id="1676155"></a>

### Version-Notes

Thread-safe since Mac OS version 10.3.
