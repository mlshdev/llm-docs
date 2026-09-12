> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statustestbooleanvalue](https://developer.apple.com/documentation/devicemanagement/statustestbooleanvalue)

# StatusTestBooleanValue

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 10.0+

A test status item for a Boolean value.

## Declaration

```
object StatusTestBooleanValue
```

## Properties

- `test.boolean-value` — `boolean` (required): The test status Boolean value.

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
        "boolean-value": true
    }
}
```

## See Also

### Test items

- [StatusTestArrayValue](statustestarrayvalue.md): A test status item for an array.
- [StatusTestDictionaryValue](statustestdictionaryvalue.md): A test status item for a dictionary.
- [StatusTestErrorValue](statustesterrorvalue.md): A test status item for an error.
- [StatusTestIntegerValue](statustestintegervalue.md): A test status item for an integer.
- [StatusTestRealValue](statustestrealvalue.md): A test status item for a real value.
- [StatusTestStringValue](statusteststringvalue.md): A test status item for a string.
