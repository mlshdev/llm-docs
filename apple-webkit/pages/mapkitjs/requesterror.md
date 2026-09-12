> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/requesterror](https://developer.apple.com/documentation/mapkitjs/requesterror)

# RequestError

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 6.0+

The error that a service method’s returned promise rejects with when a request fails.

## Declaration

```
class RequestError extends Error
```

## Mentioned In

- [Migrating from Version 5 to Version 6](migrating-from-version-5-to-version-6.md)

<a id="Discussion"></a>

## Discussion

When a [Service](service.md) method’s returned promise rejects, the rejection value is a [RequestError](requesterror.md). The [message](requesterror/message.md) property contains a [ConfigurationErrorStatus](configurationerrorstatus.md) value that describes the error.

```javascript
const search = new mapkit.Search();

try {
    const data = await search.search("coffee");
} catch (error) {
    if (error.message === "Too Many Requests") {
        // Handle rate limiting.
    }
}
```

## Topics

### Properties

- [message](requesterror/message.md): The error message describing the request failure.

## Relationships

### Inherits From

- Error

## See Also

### Service

- [Service](service.md): An abstract class that provides common interfaces for service objects.
