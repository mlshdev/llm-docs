> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.endpoint-security.client](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.endpoint-security.client)

# com.apple.developer.endpoint-security.client (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.15+

The entitlement required to monitor system events for potentially malicious activity.

## Details

`com.apple.developer.endpoint-security.client`

<a id="Discussion"></a>

## Discussion

You must request this entitlement from Apple. For information about how to request the entitlement, see [System Extensions and DriverKit](https://developer.apple.com/system-extensions/).

If your app or extension lacks this requirement, [es_new_client(\_:\_:)](https://developer.apple.com/documentation/endpointsecurity/es_new_client%28_:_:%29) fails with the result [ES_NEW_CLIENT_RESULT_ERR_NOT_ENTITLED](https://developer.apple.com/documentation/endpointsecurity/es_new_client_result_err_not_entitled).

# com.apple.developer.endpoint-security.client (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.15+

The entitlement required to monitor system events for potentially malicious activity.

## Details

`com.apple.developer.endpoint-security.client`

<a id="Discussion"></a>

## Discussion

You must request this entitlement from Apple. For information about how to request the entitlement, see [System Extensions and DriverKit](https://developer.apple.com/system-extensions/).

If your app or extension lacks this requirement, [es_new_client](https://developer.apple.com/documentation/endpointsecurity/es_new_client%28_:_:%29) fails with the result [ES_NEW_CLIENT_RESULT_ERR_NOT_ENTITLED](https://developer.apple.com/documentation/endpointsecurity/es_new_client_result_err_not_entitled).
