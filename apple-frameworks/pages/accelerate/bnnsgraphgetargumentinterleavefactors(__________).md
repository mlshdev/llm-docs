> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraphgetargumentinterleavefactors(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsgraphgetargumentinterleavefactors(_:_:_:_:_:))

# BNNSGraphGetArgumentInterleaveFactors(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the interleave factors for arguments, if present

## Declaration

```swift
func BNNSGraphGetArgumentInterleaveFactors(_ graph: bnns_graph_t, _ function: UnsafePointer<CChar>?, _ argument_count: Int, _ argument_interleave: UnsafeMutablePointer<UnsafePointer<UInt16>?>, _ argument_interleave_counts: UnsafeMutablePointer<Int>) -> Int32
```

<a id="discussion"></a>

## Discussion

If any arguments to the function are specified with an interleave factor (e.g. using the `interleave` option to `tensor_buffer` in MIL), this function can be used to retrieve the interleave factor array.

Arguments:

- `graph`: object to query.
- `function`: function to query. It may be `NULL` if there is only one function.
- `argument_count`: number of elements in `argument_interleave` and in `argument_interleave_counts`.
- `argument_interleave`: array of pointers to interleave factors to populate. On exit `argument_interleave[i]` will be set to either:

  - `NULL` if argument `i` has no interleave factor; or
  - a pointer into the graph object containing the interleave factors that contains `argument_interleave_counts[i]` elements. Only the first \[0, min(argument_count, argument_interleave)) entries are set.
- `argument_interleave_counts`: gives the size of the array pointed to by `argument_interleave[i]`, or is set to 0 if `argument_interleave[i]` is set to `NULL`.

Returns: 0 on success, nonzero on failure. Failure may be caused by either invalid values of `graph` or `function`.

## See Also

### Querying a graph’s properties

- [BNNSGraphGetArgumentIntents(\_:\_:\_:\_:)](bnnsgraphgetargumentintents%28________%29.md): Extracts the intents of arguments for the given function argument.
- [BNNSGraphArgumentIntent](bnnsgraphargumentintent.md): Constants that describe argument intents.
- [BNNSGraphGetArgumentCount(\_:\_:)](bnnsgraphgetargumentcount%28____%29.md): Returns the number of arguments for the given function argument.
- [BNNSGraphGetArgumentNames(\_:\_:\_:\_:)](bnnsgraphgetargumentnames%28________%29.md): Extracts the names of arguments for the given function argument.
- [BNNSGraphGetFunctionCount(\_:)](bnnsgraphgetfunctioncount%28__%29.md): Returns the number of callable functions in the specified graph.
- [BNNSGraphGetFunctionNames(\_:\_:\_:)](bnnsgraphgetfunctionnames%28______%29.md): Extracts the names of callable functions in the graph.
- [BNNSGraphGetInputCount(\_:\_:)](bnnsgraphgetinputcount%28____%29.md): Returns the number of input arguments for the given function argument.
- [BNNSGraphGetInputNames(\_:\_:\_:\_:)](bnnsgraphgetinputnames%28________%29.md): Extracts the names of input arguments for the given function argument.
- [BNNSGraphGetOutputCount(\_:\_:)](bnnsgraphgetoutputcount%28____%29.md): Returns the number of output arguments for the given function argument.
- [BNNSGraphGetOutputNames(\_:\_:\_:\_:)](bnnsgraphgetoutputnames%28________%29.md): Extracts the names of output arguments for the given function argument.
- [BNNSGraphGetArgumentPosition(\_:\_:\_:)](bnnsgraphgetargumentposition%28______%29.md): Returns the index into the arguments array for the given function argument.

# BNNSGraphGetArgumentInterleaveFactors (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the interleave factors for arguments, if present

## Declaration

```objectivec
int BNNSGraphGetArgumentInterleaveFactors(bnns_graph_t graph, const char *function, size_t argument_count, const uint16_t **argument_interleave, size_t *argument_interleave_counts);
```

<a id="discussion"></a>

## Discussion

If any arguments to the function are specified with an interleave factor (e.g. using the `interleave` option to `tensor_buffer` in MIL), this function can be used to retrieve the interleave factor array.

Arguments:

- `graph`: object to query.
- `function`: function to query. It may be `NULL` if there is only one function.
- `argument_count`: number of elements in `argument_interleave` and in `argument_interleave_counts`.
- `argument_interleave`: array of pointers to interleave factors to populate. On exit `argument_interleave[i]` will be set to either:

  - `NULL` if argument `i` has no interleave factor; or
  - a pointer into the graph object containing the interleave factors that contains `argument_interleave_counts[i]` elements. Only the first \[0, min(argument_count, argument_interleave)) entries are set.
- `argument_interleave_counts`: gives the size of the array pointed to by `argument_interleave[i]`, or is set to 0 if `argument_interleave[i]` is set to `NULL`.

Returns: 0 on success, nonzero on failure. Failure may be caused by either invalid values of `graph` or `function`.

## See Also

### Querying a graph’s properties

- [BNNSGraphGetArgumentIntents](bnnsgraphgetargumentintents%28________%29.md): Extracts the intents of arguments for the given function argument.
- [BNNSGraphArgumentIntent](bnnsgraphargumentintent.md): Constants that describe argument intents.
- [BNNSGraphGetArgumentCount](bnnsgraphgetargumentcount%28____%29.md): Returns the number of arguments for the given function argument.
- [BNNSGraphGetArgumentNames](bnnsgraphgetargumentnames%28________%29.md): Extracts the names of arguments for the given function argument.
- [BNNSGraphGetFunctionCount](bnnsgraphgetfunctioncount%28__%29.md): Returns the number of callable functions in the specified graph.
- [BNNSGraphGetFunctionNames](bnnsgraphgetfunctionnames%28______%29.md): Extracts the names of callable functions in the graph.
- [BNNSGraphGetInputCount](bnnsgraphgetinputcount%28____%29.md): Returns the number of input arguments for the given function argument.
- [BNNSGraphGetInputNames](bnnsgraphgetinputnames%28________%29.md): Extracts the names of input arguments for the given function argument.
- [BNNSGraphGetOutputCount](bnnsgraphgetoutputcount%28____%29.md): Returns the number of output arguments for the given function argument.
- [BNNSGraphGetOutputNames](bnnsgraphgetoutputnames%28________%29.md): Extracts the names of output arguments for the given function argument.
- [BNNSGraphGetArgumentPosition](bnnsgraphgetargumentposition%28______%29.md): Returns the index into the arguments array for the given function argument.
