> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/1627337-setinterval](https://developer.apple.com/documentation/tvmljs/1627337-setinterval)

# setInterval

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Function  
**Availability:** tvOS 9.0+

Repeatedly executes a given function at the given time interval.

## Declaration

```
String setInterval(
    in Function func, 
    in Integer time
);
```

## Parameters

- `func`: The function to be executed.
- `time`: An integer value that defines, in milliseconds, how often the function is to repeat.

<a id="return_value"></a>

## Return Value

Returns a string containing an identifier for the interval just set.

<a id="discussion"></a>

## Discussion

Pass the identifier created by this function to the [clearInterval](1627411-clearinterval.md) function to stop the designated function from executing.

## See Also

### Automating Function Timing

- [clearInterval](1627411-clearinterval.md): Stops the function associated with the identifier from repeating.
- [setTimeout](1627349-settimeout.md): Executes a given function after a set amount of time.
- [clearTimeout](1627416-cleartimeout.md): Stops the function associated with the identifier from executing.
