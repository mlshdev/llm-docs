> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_c_supplementary_mask](https://developer.apple.com/documentation/gss/gss_c_supplementary_mask)

# GSS_C_SUPPLEMENTARY_MASK (Swift)

**Framework:** GSS  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

A mask with a width that matches the supplementary information field.

## Declaration

```swift
var GSS_C_SUPPLEMENTARY_MASK: UInt { get }
```

<a id="Discussion"></a>

## Discussion

Shift the mask to the left by [GSS_C_SUPPLEMENTARY_OFFSET](gss_c_supplementary_offset.md) to put it in the correct position within the major status code to match the supplementary information field. The [GSS_SUPPLEMENTARY_INFO](gss_supplementary_info.md) macro does this for you, before bitwise `AND`ing with its input.

## See Also

### Masks and Offsets

- [GSS_C_CALLING_ERROR_MASK](gss_c_calling_error_mask.md): A mask with a width that matches the calling error field.
- [GSS_C_CALLING_ERROR_OFFSET](gss_c_calling_error_offset.md): The offset of the calling error field within the major status code.
- [GSS_C_ROUTINE_ERROR_MASK](gss_c_routine_error_mask.md): A mask with a width that matches the routine error field.
- [GSS_C_ROUTINE_ERROR_OFFSET](gss_c_routine_error_offset.md): The offset of the routine error field within the major status code.
- [GSS_C_SUPPLEMENTARY_OFFSET](gss_c_supplementary_offset.md): The offset of the supplementary information field within the major status code.

# GSS_C_SUPPLEMENTARY_MASK (Objective-C)

**Framework:** GSS  
**Kind:** Macro  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

A mask with a width that matches the supplementary information field.

## Declaration

```objectivec
#define GSS_C_SUPPLEMENTARY_MASK
```

<a id="Discussion"></a>

## Discussion

Shift the mask to the left by [GSS_C_SUPPLEMENTARY_OFFSET](gss_c_supplementary_offset.md) to put it in the correct position within the major status code to match the supplementary information field. The [GSS_SUPPLEMENTARY_INFO](gss_supplementary_info.md) macro does this for you, before bitwise `AND`ing with its input.

## See Also

### Masks and Offsets

- [GSS_C_CALLING_ERROR_MASK](gss_c_calling_error_mask.md): A mask with a width that matches the calling error field.
- [GSS_C_CALLING_ERROR_OFFSET](gss_c_calling_error_offset.md): The offset of the calling error field within the major status code.
- [GSS_C_ROUTINE_ERROR_MASK](gss_c_routine_error_mask.md): A mask with a width that matches the routine error field.
- [GSS_C_ROUTINE_ERROR_OFFSET](gss_c_routine_error_offset.md): The offset of the routine error field within the major status code.
- [GSS_C_SUPPLEMENTARY_OFFSET](gss_c_supplementary_offset.md): The offset of the supplementary information field within the major status code.
