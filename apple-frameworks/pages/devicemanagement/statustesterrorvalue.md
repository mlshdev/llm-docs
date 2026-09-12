> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statustesterrorvalue](https://developer.apple.com/documentation/devicemanagement/statustesterrorvalue)

# StatusTestErrorValue

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 10.0+

A test status item for an error.

## Declaration

```
object StatusTestErrorValue
```

## Properties

- `test.error-value` — `string` (required): The test status error value.

<a id="Discussion"></a>

## Discussion

<a id="Status-item-availability"></a>

### Status item availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | iOS, macOS, Shared iPad, tvOS, visionOS, watchOS |
| Allowed in device enrollment | iOS, Shared iPad, tvOS, visionOS |
| Allowed in user enrollment | iOS, macOS, Shared iPad, visionOS |
| Allowed in local enrollment | iOS, macOS, Shared iPad, tvOS, visionOS, watchOS |
| Allowed in system scope | iOS, macOS, Shared iPad, tvOS, visionOS, watchOS |
| Allowed in user scope | macOS, Shared iPad |

<a id="Status-item-example"></a>

### Status item example

```json
{
    "test": {
        "error-value": "error-value"
    }
}
```

## See Also

### Test items

- [StatusTestArrayValue](statustestarrayvalue.md): A test status item for an array.
- [StatusTestBooleanValue](statustestbooleanvalue.md): A test status item for a Boolean value.
- [StatusTestDictionaryValue](statustestdictionaryvalue.md): A test status item for a dictionary.
- [StatusTestIntegerValue](statustestintegervalue.md): A test status item for an integer.
- [StatusTestRealValue](statustestrealvalue.md): A test status item for a real value.
- [StatusTestStringValue](statusteststringvalue.md): A test status item for a string.
