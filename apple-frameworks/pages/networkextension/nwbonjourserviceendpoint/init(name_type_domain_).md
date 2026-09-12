> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwbonjourserviceendpoint/init(name:type:domain:)](https://developer.apple.com/documentation/networkextension/nwbonjourserviceendpoint/init(name:type:domain:))

# init(name:type:domain:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Create an endpoint with a Bonjour service name, type, and domain. All fields must be specified.

> Use the [nw_endpoint_create_bonjour_service(\_:\_:\_:)](../../network/nw_endpoint_create_bonjour_service%28______%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
convenience init(name: String, type: String, domain: String)
```

## Parameters

- `name`: The Bonjour service name.
- `type`: The Bonjour service type.
- `domain`: The Bonjour service domain.

<a id="return-value"></a>

## Return Value

The new [NWBonjourServiceEndpoint](../nwbonjourserviceendpoint.md) object.

# endpointWithName:type:domain: (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Create an endpoint with a Bonjour service name, type, and domain. All fields must be specified.

> Use the [nw_endpoint_create_bonjour_service](../../network/nw_endpoint_create_bonjour_service%28______%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
+ (instancetype) endpointWithName:(NSString *) name type:(NSString *) type domain:(NSString *) domain;
```

## Parameters

- `name`: The Bonjour service name.
- `type`: The Bonjour service type.
- `domain`: The Bonjour service domain.

<a id="return-value"></a>

## Return Value

The new [NWBonjourServiceEndpoint](../nwbonjourserviceendpoint.md) object.
