> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_calling_error](https://developer.apple.com/documentation/gss/gss_calling_error)

# GSS_CALLING_ERROR

**Interface language:** Objective-C

**Framework:** GSS  
**Kind:** Macro  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

A macro that masks out all but the calling error field from a major status code.

## Declaration

```objectivec
#define GSS_CALLING_ERROR(x)
```

<a id="Discussion"></a>

## Discussion

Apply this macro to a major status code, then compare the result with one of the calling error constants to determine which calling error occurred.

## See Also

### Extraction Macros

- [GSS_ERROR](gss_error.md): A macro that masks the supplementary info out of a major status code, leaving both calling and routine error fields.
- [GSS_ROUTINE_ERROR](gss_routine_error.md): A macro that masks out all but the routine error field from a major status code.
- [GSS_SUPPLEMENTARY_INFO](gss_supplementary_info.md): A macro that masks out all but the supplementary information field from a major status code.
