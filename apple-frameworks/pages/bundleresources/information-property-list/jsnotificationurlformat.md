> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/jsnotificationurlformat](https://developer.apple.com/documentation/bundleresources/information-property-list/jsnotificationurlformat)

# JSNotificationURLFormat

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A universal link that determines how the system provides Journaling Suggestion notifications to your app.

## Details

`JSNotificationURLFormat`

<a id="discussion"></a>

## Discussion

Add this key to your app’s Info.plist to register it as an eligible client of [Journaling Suggestions](https://developer.apple.com/documentation/journalingsuggestions) notifications. The value needs to be a *universal link*, which consists of a base URL for your app, followed by the parameter string: `{journaling-suggestion-id}`, which represents the unique journaling suggestion. For example:

```http
<base_URL>/{journaling-suggesion-id}
```

As an alternative to including the parameter string as a path component, you can define it as a query argument. The following example specifies query argument `suggestion-identifier`:

```http
<base_URL>/?suggestion-identifier={journaling-suggestion-id}
```

The base URL is composed of a protocol identifier, your app’s domain name, and a unique path component that scopes the request to a journaling suggestion:

```http
<protocol_identifier><domain_name>/<path_component>
```

Here are complete example values:

```http
# Example with a path-component argument:
http://myapp.com/journaling-suggestion/{journaling-suggesion-id}

# Example with a query-parameter argument:
http://myapp.com/journaling-suggestion-notification/?suggestion-identifier={journaling-suggesion-id}
```
