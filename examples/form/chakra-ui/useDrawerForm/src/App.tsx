import { Refine } from "@pankod/refine-core";
import {
    ChakraProvider,
    ErrorComponent,
    Layout,
    LightTheme,
    ReadyPage,
} from "@pankod/refine-chakra-ui";
import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6";

import { PostList } from "./pages";

const DashboardPage = () => {
    return <span>dashboard</span>;
};

const App: React.FC = () => {
    return (
        <ChakraProvider theme={LightTheme}>
            <Refine
                DashboardPage={DashboardPage}
                routerProvider={routerProvider}
                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                Layout={Layout}
                ReadyPage={ReadyPage}
                catchAll={<ErrorComponent />}
                resources={[
                    {
                        name: "posts",
                        list: PostList,
                    },
                ]}
            />
        </ChakraProvider>
    );
};

export default App;
