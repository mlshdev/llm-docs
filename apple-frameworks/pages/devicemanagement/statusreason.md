> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusreason](https://developer.apple.com/documentation/devicemanagement/statusreason)

# StatusReason

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 10.0+

Provides details about an error for an item in a status report.

## Declaration

```
object StatusReason
```

## Properties

- `Code` — `string` (required):
- `Description` — `string`:
- `Details` — `StatusReason.ErrorDetails`:

<a id="Discussion"></a>

## Discussion

Each status item defines its own set of `code`, `description`, and `details` values.

<a id="Status-item-example"></a>

### Status item example

```json
{
    "code": "Error.InstallFailed",
    "description": "The app installation failed.",
    "details": {
        "Timestamp": "2025-05-15T10:30:00Z"
    }
}
```

## Topics

### Dictionaries

- [StatusReason.ErrorDetails](statusreason/errordetails.md)

## See Also

### Status report

- [StatusReport](statusreport.md): Provides details about an error for an item in a status report.
