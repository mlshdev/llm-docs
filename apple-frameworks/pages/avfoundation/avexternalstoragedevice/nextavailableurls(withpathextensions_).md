> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avexternalstoragedevice/nextavailableurls(withpathextensions:)](https://developer.apple.com/documentation/avfoundation/avexternalstoragedevice/nextavailableurls(withpathextensions:))

# nextAvailableURLs(withPathExtensions:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Generates an array of security scoped URLs that are compliant for digital camera formats, where each element has a different path extension.

## Declaration

```swift
func nextAvailableURLs(withPathExtensions extensionArray: [String]) throws -> [URL]
```

## Parameters

- `extensionArray`: An array of path extensions the method generates URLs for.

<a id="return-value"></a>

## Return Value

An array of digital camera format (DCF) compliant URLs with security scoping, one for each path extension element in `extensionArray`.

<a id="Discussion"></a>

## Discussion

The method generates a digital camera format (DCF) compliant URL with security scoping for each file extension element in `extensionArray`. It does this by configuring the folder structure and, if necessary, creates a digital camera image (DCIM) folder on the external storage device.

> **Important**

>  The method generates an error if [authorizationStatus](authorizationstatus.md) isn’t [AVAuthorizationStatus.authorized](../avauthorizationstatus/authorized.md).

<a id="Request-access-to-the-storage-device-before-request"></a>

### Request access to the storage device before request

Your app can request authorization before calling the method if [authorizationStatus](authorizationstatus.md) is [AVAuthorizationStatus.notDetermined](../avauthorizationstatus/notdetermined.md) by calling the [requestAccess(completionHandler:)](requestaccess%28completionhandler_%29.md) method first.

<a id="Start-and-stop-access-to-a-URL-around-your-code"></a>

### Start and stop access to a URL around your code

To access one of the security-scoped URLs the method returns, you need to call the [startAccessingSecurityScopedResource()](../../foundation/url/startaccessingsecurityscopedresource%28%29.md), and [stopAccessingSecurityScopedResource()](../../foundation/url/stopaccessingsecurityscopedresource%28%29.md) methods before and after your code.

**Swift**

```swift
securityScopedURL.startAccessingSecurityScopedResource()

// Your code that accesses the URL goes in between the start and stop calls.
...

securityScopedURL.stopAccessingSecurityScopedResource()
```

**Objective-C**

```objc
[securityScopedURL startAccessingSecurityScopedResource];

// Your code that accesses the URL goes in between the start and stop calls.
...

[securityScopedURL stopAccessingSecurityScopedResource];

```

# nextAvailableURLsWithPathExtensions:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Generates an array of security scoped URLs that are compliant for digital camera formats, where each element has a different path extension.

## Declaration

```objectivec
- (NSArray<NSURL *> *) nextAvailableURLsWithPathExtensions:(NSArray<NSString *> *) extensionArray error:(NSError **) outError;
```

## Parameters

- `extensionArray`: An array of path extensions the method generates URLs for.
- `outError`: On return, if an error occurs, a pointer to an error information instance that explains why the method couldn’t provide the path extensions ; otherwise `nil`.

<a id="return-value"></a>

## Return Value

An array of digital camera format (DCF) compliant URLs with security scoping, one for each path extension element in `extensionArray`.

<a id="Discussion"></a>

## Discussion

The method generates a digital camera format (DCF) compliant URL with security scoping for each file extension element in `extensionArray`. It does this by configuring the folder structure and, if necessary, creates a digital camera image (DCIM) folder on the external storage device.

> **Important**

>  The method generates an error if [authorizationStatus](authorizationstatus.md) isn’t [AVAuthorizationStatusAuthorized](../avauthorizationstatus/authorized.md).

<a id="Request-access-to-the-storage-device-before-request"></a>

### Request access to the storage device before request

Your app can request authorization before calling the method if [authorizationStatus](authorizationstatus.md) is [AVAuthorizationStatusNotDetermined](../avauthorizationstatus/notdetermined.md) by calling the [requestAccessWithCompletionHandler:](requestaccess%28completionhandler_%29.md) method first.

<a id="Start-and-stop-access-to-a-URL-around-your-code"></a>

### Start and stop access to a URL around your code

To access one of the security-scoped URLs the method returns, you need to call the [startAccessingSecurityScopedResource()](../../foundation/url/startaccessingsecurityscopedresource%28%29.md), and [stopAccessingSecurityScopedResource()](../../foundation/url/stopaccessingsecurityscopedresource%28%29.md) methods before and after your code.

**Swift**

```swift
securityScopedURL.startAccessingSecurityScopedResource()

// Your code that accesses the URL goes in between the start and stop calls.
...

securityScopedURL.stopAccessingSecurityScopedResource()
```

**Objective-C**

```objc
[securityScopedURL startAccessingSecurityScopedResource];

// Your code that accesses the URL goes in between the start and stop calls.
...

[securityScopedURL stopAccessingSecurityScopedResource];

```
