> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/1627349-settimeout](https://developer.apple.com/documentation/tvmljs/1627349-settimeout)

# setTimeout

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Function  
**Availability:** tvOS 9.0+

Executes a given function after a set amount of time.

## Declaration

```
String setTimeout(
    in Function func, 
    in Integer time
);
```

## Parameters

- `func`: The function to be executed.
- `time`: An integer value that defines, in milliseconds, how long until the function is executed.

<a id="return_value"></a>

## Return Value

Returns a string containing an identifier for the timeout just set.

<a id="discussion"></a>

## Discussion

Pass the identifier created by this function to the [clearTimeout](1627416-cleartimeout.md) function to stop the designated function from executing.

## See Also

### Automating Function Timing

- [setInterval](1627337-setinterval.md): Repeatedly executes a given function at the given time interval.
- [clearInterval](1627411-clearinterval.md): Stops the function associated with the identifier from repeating.
- [clearTimeout](1627416-cleartimeout.md): Stops the function associated with the identifier from executing.
