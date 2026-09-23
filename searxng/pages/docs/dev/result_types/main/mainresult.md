> Pinned source for SearXNG master: [docs/dev/result_types/main/mainresult.rst](https://github.com/searxng/searxng/blob/3cd69d30e2a78dfc817be9e349e7c2e4317c92e3/docs/dev/result_types/main/mainresult.rst)

<a id="result-types-mainresult"></a>

# Main Results

<a id="api-searx-result-types-base-mainresult"></a>

#### `MainResult(Result): # pylint: disable=missing-class-docstring """Base class of all result types displayed in:ref:\`area main results\`.""" template: str = "default.html" """Name of the template used to render the result. By default:origin:\`result\_templates/default.html \<searx/templates/simple/result\_templates/default.html>\` is used. """ title: str = "" """Link title of the result item.""" content: str = "" """Extract or description of the result item""" img\_src: str = "" """URL of a image that is displayed in the result item.""" iframe\_src: str = "" """URL of an embedded \`\`<iframe>\`\` / the frame is collapsible. To convert a standard video URL from a widely know video services into its embed format, have a look at:obj:\`searx.utils.get\_embedded\_stream\_url\`. """ audio\_src: str = "" """URL of an embedded \`\`<audio controls>\`\`.""" thumbnail: str = "" """URL of a thumbnail that is displayed in the result item.""" publishedDate: datetime.datetime | None = None """The date on which the object was published.""" pubdate: str = "" """String representation of:py:obj:\`MainResult.publishedDate\` Deprecated: it is still partially used in the templates, but will one day be completely eliminated. """ length: datetime.timedelta | None = None """Playing duration in seconds.""" views: str = "" """View count in humanized number format.""" author: str = "" """Author of the title.""" metadata: str = "" """Miscellaneous metadata.""" PriorityType = t.Literal\["", "high", "low"] # pyright: ignore\[reportUnannotatedClassAttribute] priority: "MainResult.PriorityType" = "" """The priority can be set via:ref:\`hostnames plugin\`, for example.""" engines: set\[str] = set() """In a merged results list, the names of the engines that found this result are listed in this field.""" # open\_group and close\_group should not manged in the Result # class (we should drop it from here!) open\_group: bool = False close\_group: bool = False positions: list\[int] = \[] score: float = 0 category: str = "" def **hash**(self) -> int\`

Ordinary url-results are equal if their values for
`Result.template`, `Result.parsed_url` (without scheme)
and `MainResult.img_src` are equal.
