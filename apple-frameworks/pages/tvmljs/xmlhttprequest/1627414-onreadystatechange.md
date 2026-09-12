> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/xmlhttprequest/1627414-onreadystatechange](https://developer.apple.com/documentation/tvmljs/xmlhttprequest/1627414-onreadystatechange)

# onreadystatechange

**Interface language:** Data

**Framework:** TVMLKit JS, WebKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ · Safari Desktop 10.0+ · Safari Mobile 10.0+

A callback function that is called when the [readyState](1627324-readystate.md) attribute changes.

## Declaration

```
attribute function onreadystatechange;
```

```
attribute EventHandler onreadystatechange;
```

<a id="discussion"></a>

## Discussion

Do not use this attribute in conjunction with synchronous requests. This attribute must be set to a function; for example, `XMLHttpRequest.onreadystatechange = function () {}`.

## See Also

### Implementing Callback Functions

- [onabort](1627410-onabort.md): A callback function called when a request is cancelled by the user.
- [onerror](1627328-onerror.md): A callback function that is called if the request fails due to an error.
- [onload](1627316-onload.md): A callback function that is called when the request is successfully completed.
- [onloadend](1627365-onloadend.md): A callback function that is called when the request is completed for any reason.
- [onloadstart](1627440-onloadstart.md): A callback function that is called when the request begins.
- [ontimeout](1627321-ontimeout.md): A callback function that is called when a request times out.
