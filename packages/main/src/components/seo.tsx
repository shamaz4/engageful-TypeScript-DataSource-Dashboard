import { FC } from "react";
import { Helmet } from "react-helmet";

interface IProps {
    title?: string;
    titleTemplate?: string;
    description?: string;
}

const SEO: FC<IProps> = ({ title, titleTemplate, description }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>
                {title} - {titleTemplate}
            </title>
            <meta name="description" content={description} />
        </Helmet>
    );
};

SEO.defaultProps = {
    title: "Engageful",
    titleTemplate: "Dashboard",
    description: "Dashboard",
};

export default SEO;
