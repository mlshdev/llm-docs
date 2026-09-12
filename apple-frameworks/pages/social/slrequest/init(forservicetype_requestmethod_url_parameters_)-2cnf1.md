> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slrequest/init(forservicetype:requestmethod:url:parameters:)-2cnf1](https://developer.apple.com/documentation/social/slrequest/init(forservicetype:requestmethod:url:parameters:)-2cnf1)

# init(forServiceType:requestMethod:url:parameters:) (Swift)

**Framework:** Social  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+

Initializes a newly created request object with the specified properties.

## Declaration

```swift
init!(forServiceType serviceType: String!, requestMethod: SLRequestMethod, url: URL!, parameters: [AnyHashable : Any]!)
```

## Parameters

- `serviceType`: The social networking service type. For possible values, see `Service Type Constants`.
- `requestMethod`: The method to use for this HTTP request. For possible values, see [SLRequestMethod](../slrequestmethod.md).
- `url`: The destination URL for this HTTP request. The values and formatting for the URL are dependent on the target service and are documented by the service provider. For links to documentation for the supported services, see Table 1 in [SLRequest](../slrequest.md).
- `parameters`: The parameters for this HTTP request. The values and formatting are dependent on the target service and are documented by the service provider. For links to documentation for the supported services, see Table 1 in [SLRequest](../slrequest.md).

<a id="return-value"></a>

## Return Value

The newly initialized request object.

<a id="Discussion"></a>

## Discussion

Use this method to initialize an `SLRequest`. The value and formatting of each parameter is dependent on the target service.

## See Also

### Initializing Requests

- [SLServiceTypeFacebook](../slservicetypefacebook.md): Deprecated.
- [SLServiceTypeTwitter](../slservicetypetwitter.md): Deprecated.
- [SLServiceTypeSinaWeibo](../slservicetypesinaweibo.md): Deprecated.
- [SLServiceTypeLinkedIn](../slservicetypelinkedin.md): Deprecated.
- [SLServiceTypeTencentWeibo](../slservicetypetencentweibo.md): Deprecated.

# requestForServiceType:requestMethod:URL:parameters: (Objective-C)

**Framework:** Social  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+

Initializes a newly created request object with the specified properties.

## Declaration

```objectivec
+ (SLRequest *) requestForServiceType:(NSString *) serviceType requestMethod:(SLRequestMethod) requestMethod URL:(NSURL *) url parameters:(NSDictionary *) parameters;
```

## Parameters

- `serviceType`: The social networking service type. For possible values, see `Service Type Constants`.
- `requestMethod`: The method to use for this HTTP request. For possible values, see [SLRequestMethod](../slrequestmethod.md).
- `url`: The destination URL for this HTTP request. The values and formatting for the URL are dependent on the target service and are documented by the service provider. For links to documentation for the supported services, see Table 1 in [SLRequest](../slrequest.md).
- `parameters`: The parameters for this HTTP request. The values and formatting are dependent on the target service and are documented by the service provider. For links to documentation for the supported services, see Table 1 in [SLRequest](../slrequest.md).

<a id="return-value"></a>

## Return Value

The newly initialized request object.

<a id="Discussion"></a>

## Discussion

Use this method to initialize an `SLRequest`. The value and formatting of each parameter is dependent on the target service.

## See Also

### Initializing Requests

- [SLServiceTypeFacebook](../slservicetypefacebook.md): Deprecated.
- [SLServiceTypeTwitter](../slservicetypetwitter.md): Deprecated.
- [SLServiceTypeSinaWeibo](../slservicetypesinaweibo.md): Deprecated.
- [SLServiceTypeLinkedIn](../slservicetypelinkedin.md): Deprecated.
- [SLServiceTypeTencentWeibo](../slservicetypetencentweibo.md): Deprecated.
