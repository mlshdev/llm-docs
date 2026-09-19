> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1552228-speech-channel_information_constants/sorefcon

# soRefCon

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
soRefCon = 'refc'
```

<a id="discussion"></a>

## Discussion

Set a speech channel’s reference constantvalue. The reference constant value is passed to application-definedcallback functions and might contain any value convenient for theapplication. The `speechInfo` parameteris a long integer containing the reference constant value. In contrastwith other selectors, this selector does not require that the `speechInfo` parameter’s valuebe a pointer value. Typically, however, an application does usethis selector to pass a pointer or handle value to callback functions.

This selector works with the `SetSpeechInfo` function.
