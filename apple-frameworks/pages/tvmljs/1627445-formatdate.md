> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/1627445-formatdate](https://developer.apple.com/documentation/tvmljs/1627445-formatdate)

# formatDate

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Function  
**Availability:** tvOS 9.0+

Formats the given date into the given format.

## Declaration

```
String formatDate(
    in Date date, 
    in String format
);
```

## Parameters

- `date`: The date value to format.
- `format`: A string that specifies the desired format. For a list of possible formats, see [DateFormatter](../foundation/dateformatter.md).

<a id="return_value"></a>

## Return Value

A string containing the formatted date.

## See Also

### Formatting Information

- [formatDuration](1627346-formatduration.md): Formats the given duration into the standard tvOS format.
- [formatNumber](1627348-formatnumber.md): Formats the specified number into the given format.
