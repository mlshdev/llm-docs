> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapkitinitializationoptions/authorizationcallback](https://developer.apple.com/documentation/mapkitjs/mapkitinitializationoptions/authorizationcallback)

# authorizationCallback

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface Property  
**Availability:** MapKit JS 5.0+

A callback function that obtains a token.

## Declaration

```
authorizationCallback?: (this: null, done: (token: string) => void) => void;
```

## Parameters

- `done`: A function that completes the MapKit JS token request, called after creating a new token.

<a id="Discussion"></a>

## Discussion

MapKit JS asyncronously invokes the `authorizationCallback` function throughout a session to obtain new authorization tokens. In the callback, you create a token and pass it to the function that MapKit JS provides in the `done` parameter.

## See Also

### Callback and language

- [language](language.md): An ID that indicates the preferred language to use when displaying map labels, controls, directions, and other text.
