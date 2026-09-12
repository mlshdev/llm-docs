> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/jsonpointer](https://developer.apple.com/documentation/enterpriseprogramapi/jsonpointer)

# JsonPointer

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Object

An object that contains the JSON pointer that indicates the location of the error.

## Declaration

```
object JsonPointer
```

## Properties

- `pointer` — `string` (required): A JSON pointer that indicates the location in the request entity where the error originates.

<a id="Discussion"></a>

## Discussion

In some cases, the JSON pointer may indicate an element that isn’t in the request entity, but should be. For more information about JSON pointers, see the [RFC 6901](https://tools.ietf.org/html/rfc6901) proposed standards document.

## See Also

### Objects

- [Parameter](parameter.md): An object that contains the query parameter that produced the error.
- [ErrorResponse.Errors.Meta](errorresponse/errors-data.dictionary/meta-data.dictionary.md): An object that contains the error itself or associated errors.
